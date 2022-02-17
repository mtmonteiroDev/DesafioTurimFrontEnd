import React, { useState, useEffect } from "react";
import axios from "axios";
import FuncionarioForm from "./FuncionarioForm";
  

const EditFuncionario = (props) => {
  const [formValues, setFormValues] = useState({
    funcionairoId:"",
    matricula:"",
    nome: "",
    area: "",
    cargo: "",
    salario: "",
    dataadmissao: "",
  });
  

  const onSubmit = (FuncionarioObject) => {
    axios
      .put(
        "http://localhost:5998/api/Funcionario/AlterarFuncionario",FuncionarioObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Funcionario alterado com sucesso");
          props.history.push("/Funcionario-list");
        } else Promise.reject();
      })
      .catch((error) => alert(error.response.data.erro));
  };
  

  useEffect(() => {
    
    axios
      .get(
        "http://localhost:5998/api/Funcionario/BuscarFuncionario/" 
        + props.match.params.id
      )
      .then((res) => {
        const { funcionairoId, matricula,nome,area,cargo,salario,dataadmissao } = res.data;
        setFormValues({ funcionairoId, matricula,nome,area,cargo,salario,dataadmissao });
        console.log(res.data)    
      })
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <div>
      <div className="form-wrapper">
        <h2>Alterar Funcionários</h2> 
      </div> 
      <FuncionarioForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Alterar Funcionário
      </FuncionarioForm>
    </div>
  );
};
  

export default EditFuncionario;
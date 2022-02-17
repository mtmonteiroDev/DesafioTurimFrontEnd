import React, { useState, useEffect } from "react";
import axios from 'axios';
import FuncionarioForm from "./FuncionarioForm";
  

const CreateFuncionario = (props) => {
  const [formValues, setFormValues] = 
    useState({ 
    matricula:"",
    nome: "",
    area: "",
    cargo: "",
    salario: "",
    dataadmissao: "",
 })

  const onSubmit = FuncionarioObject => {
      
    axios.post('http://localhost:5998/api/Funcionario/IncluirFuncionario', FuncionarioObject)
      .then(res => {
        if (res.status === 200){
          alert('Funcionario criado com sucesso')
          props.history.push("/Funcionario-list");
        }  
        else
          Promise.reject()
      })
      .catch(error=> {
            alert(error.response.data.erro);
        }
      )
  }
    

  return(
    <div>
        <div className="form-wrapper">
            <h2>Cadastrar Funcionários</h2> 
        </div>
        <FuncionarioForm initialValues={formValues} 
        onSubmit={onSubmit} 
        enableReinitialize>
        Incluir Funcionário
        </FuncionarioForm>
    </div>
  )
}
  
// Export CreateFuncionario Component
export default CreateFuncionario
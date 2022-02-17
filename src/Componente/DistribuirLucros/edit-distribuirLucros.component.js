import React, { useState, useEffect } from "react";
import axios from "axios";
import ValordistribuirForm from "./DistrinuirLucrosForm";
  

const EditDistribuirLucro = (props) => {
  const [formValues, setFormValues] = useState({
    distribuicaoID:"",
    valorDistribuir:"",
    
  });
  

  const onSubmit = (ValordistribuirObject) => {
    console.log(ValordistribuirObject);
    axios
      .put(
        "http://localhost:5998/api/Funcionario/CalculaDistribuicaoDeLucros")
      .then((res) => {
        if (res.status === 200) {
          alert("Valor de distribuir com sucesso");
          props.history.push("/funcionario-list");
        } else Promise.reject();
      })
      .catch((error) => alert(error.response.data.erro));
  };
  
  return (
    <div>
      <div className="form-wrapper">
        <h2>Distribuir Lucros</h2> 
      </div> 
      <ValordistribuirForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Distribuir Lucros
      </ValordistribuirForm>
    </div>
  );
};
  

export default EditDistribuirLucro;
import React, { useState, useEffect } from "react";
import axios from "axios";
import ValordistribuirForm from "./ValorDistrinuirForm";
  

const EditValordistribuir = (props) => {
  const [formValues, setFormValues] = useState({
    distribuicaoID:"",
    valorDistribuir:"",
    
  });
  

  const onSubmit = (ValordistribuirObject) => {
    console.log(ValordistribuirObject);
    axios
      .put(
        "http://localhost:5998/api/Distribuicao/AtualizarValorDistribuicao",ValordistribuirObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Valor de distribuir alterado com sucesso");
          props.history.push("/Funcionario-list");
        } else Promise.reject();
      })
      .catch((error) => alert(error.response.data.erro));
  };
  
  
  useEffect(() => {
    
    axios
      .get(
        "http://localhost:5998/api/Distribuicao/BuscarValorParaDistribuicao" 
      )
      .then((res) => {
        const { distribuicaoID, valorDistribuir } = res.data[0];
        setFormValues({ distribuicaoID, valorDistribuir });
        console.log(res.data[0])    
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  return (
    <div>
      <div className="form-wrapper">
        <h2>Alterar valor de distribuição</h2> 
      </div> 
      <ValordistribuirForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Alterar
      </ValordistribuirForm>
    </div>
  );
};
  
// Export EditValordistribuir Component
export default EditValordistribuir;
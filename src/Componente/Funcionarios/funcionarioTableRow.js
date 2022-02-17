import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const FuncionarioTableRow = (props) => {
  const { funcionairoId, matricula, nome, cargo, area, salario,dataadmissao } = props.obj;
  
  const deleteStudent = () => {
    if(window.confirm("Tem certeza que deseja excluir o funcionário ?")){
      axios
        .delete(
        "http://localhost:5998/api/Funcionario/ExcluirFuncionario/" + funcionairoId)
        .then((res) => {
          if (res.status === 200) {
            alert("Funcionario excluído com sucesso");
            window.location.reload();
          } else Promise.reject();
        })
        .catch((err) => alert("Algo de errado aconteceu"));
    }
  };
  
  return (
    <tr>
      
      <td>{matricula}</td>
      <td>{nome}</td>
      <td>{cargo}</td>
      <td>{area}</td>
      <td>{salario}</td>
      <td>{dataadmissao}</td>
      
      <td>
        <Link className="edit-link" 
          to={"/edit-funcionario/" + funcionairoId}>
          Alterar
        </Link>
        
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Excluir
        </Button>
        
      </td>
    </tr>
  );
};
  
export default FuncionarioTableRow;
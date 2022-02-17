import React from "react";
  
const FuncionarioTableRow = (props) => {
  const { matricula, nome, valorDistribuido } = props.obj;
  
  return (
    <tr>
      
      <td>{matricula}</td>
      <td>{nome}</td>
      <td>{valorDistribuido}</td>
      
    </tr>
  );
};
  
export default FuncionarioTableRow;
import React from "react";
  
const TotalColaboradorTableRow = (props) => {
  const { quantidadeDeFuncionarios } = props.obj;
  
  return (
    <tr>
      
      <td>{quantidadeDeFuncionarios}</td>
      
    </tr>
  );
};
  
export default TotalColaboradorTableRow;
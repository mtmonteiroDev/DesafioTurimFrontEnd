import React from "react";
const TotalDisponibilizadoTableRow = (props) => {
  const { totalDisponibilizadoParaDistribucao } = props.obj;
  
  return (
    <tr>
      
      <td>{totalDisponibilizadoParaDistribucao}</td>
    </tr>
  );
};
  
export default TotalDisponibilizadoTableRow;
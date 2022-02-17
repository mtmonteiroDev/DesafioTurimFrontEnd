import React from "react";

const SaldoTableRow = (props) => {
  const { saldoDisponibilizadoDistribuido } = props.obj;
  
  return (
    <tr>
      
      <td>{saldoDisponibilizadoDistribuido}</td>
    </tr>
  );
};
  
export default SaldoTableRow;
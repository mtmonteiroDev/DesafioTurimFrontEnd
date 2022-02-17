import React from "react";

const TotaldistribuidoTableRow = (props) => {
  const { totalDistribuido } = props.obj;
  
  return (
    <tr>
      
      <td>{totalDistribuido}</td>
    </tr>
  );
};
  
export default TotaldistribuidoTableRow;
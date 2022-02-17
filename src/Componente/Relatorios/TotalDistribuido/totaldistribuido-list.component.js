import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TotaldistribuidoTableRow from "./totaldistribuidoTableRow";
import { Link } from "react-router-dom";  
const TotalDistribuido = () => {
  const [Retorno, setRetorno] = useState([]);
  const apiUrl = "http://localhost:5998/api/Relatorio/RetornaTotalDistribuido" 
  
  useEffect(() => {
    axios
      .get(apiUrl)
      .then(({ data }) => {
        setRetorno(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
       return <TotaldistribuidoTableRow obj={Retorno} key={Retorno.totalDistribuido} />;
  };
  
  return (
     <div className="table-wrapper">
        <div>
            <h2>Total distribuido</h2>
        </div>
        <div className="table-wrapper">
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        
                        <th scope="col">Total Distibuido</th>
                    </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
              </Table>
            </div>
        </div>
     </div> 
    
  );
};
  
export default TotalDistribuido;
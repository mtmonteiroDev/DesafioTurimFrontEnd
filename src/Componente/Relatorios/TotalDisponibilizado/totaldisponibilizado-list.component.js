import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TotalDisponibilizadoTableRow from "./totaldisponibilizadoTableRow";
import { Link } from "react-router-dom";  
const TotalDisponibilizado = () => {
  const [Retorno, setRetorno] = useState([]);
  const apiUrl = "http://localhost:5998/api/Relatorio/RetornaTotalDisPonibilizado" 
  
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
       return <TotalDisponibilizadoTableRow obj={Retorno} key={Retorno.totalDisponibilizadoParaDistribucao} />;
  };
  
  return (
     <div className="table-wrapper">
        <div>
            <h2>Total Disponibilizado</h2>
        </div>
        <div className="table-wrapper">
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        
                        <th scope="col">Total Disponibilizado</th>
                    </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
              </Table>
            </div>
        </div>
     </div> 
    
  );
};
  
export default TotalDisponibilizado;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import SaldoTableRow from "./SaldoTableRow";
import { Link } from "react-router-dom";  
const Saldo = () => {
  const [Retorno, setRetorno] = useState([]);
  const apiUrl = "http://localhost:5998/api/Relatorio/RetornaSaldoDisponibilizadoDistribuido" 
  
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
       return <SaldoTableRow obj={Retorno} key={Retorno.saldoDisponibilizadoDistribuido} />;
  };
  
  return (
     <div className="table-wrapper">
        <div>
            <h2>Saldo entre disponibilizado e disponível</h2>
        </div>
        <div className="table-wrapper">
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th scope="col">Saldo</th>
                    </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
              </Table>
            </div>
        </div>
     </div> 
    
  );
};
  
export default Saldo;
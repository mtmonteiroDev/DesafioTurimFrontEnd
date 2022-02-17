import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TotalColaboradorTableRow from "./totalfuncionarionarioTableRow";
 
const TotalColaborador = () => {
  const [Retorno, setRetorno] = useState([]);
  const apiUrl = "http://localhost:5998/api/Relatorio/ListarFuncionariosCadastratos" 
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
      return <TotalColaboradorTableRow obj={Retorno} key={Retorno.quantidadeDeFuncionarios} />;
  };
  
  return (
     <div className="table-wrapper">
        <div>
            <h2>Total de funcionarios cadastrados</h2>
        </div>
        <div className="table-wrapper">
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>

                        <th scope="col">Total</th>
                    </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
              </Table>
            </div>
        </div>
     </div> 
    
  );
};
  
export default TotalColaborador;
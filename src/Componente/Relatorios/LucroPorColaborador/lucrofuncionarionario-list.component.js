import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import LucroPorColaboradorTableRow from "./lucrofuncionarionarioTableRow";
const LucroPorColaborador = () => {
  const [Retorno, setRetorno] = useState([]);
  const apiUrl = "http://localhost:5998/api/Relatorio/ListarDistribuicaoDeLucroPorFuncionario" 
  console.log("entrei");
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
    return Retorno.map((res, i) => {
      return <LucroPorColaboradorTableRow obj={res} key={i} />;
    });
  };
  
  return (
     <div className="table-wrapper">
        <div>
            <h2>Lista de distribuição de lucros por fucnionário</h2>
        </div>
        <div className="table-wrapper">
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        
                        <th scope="col">Matricula</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor distribuido</th>
                    </tr>
                    </thead>
                    <tbody>{DataTable()}</tbody>
              </Table>
            </div>
        </div>
     </div> 
    
  );
};
  
export default LucroPorColaborador;
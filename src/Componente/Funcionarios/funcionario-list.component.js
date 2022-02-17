import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import FuncionarioTableRow from "./funcionarioTableRow";
import { Link } from "react-router-dom";  
const FuncionarioList = () => {
  const [Funcionarios, setFuncionarios] = useState([]);
  const apiUrl = "http://localhost:5998/api/Funcionario/ListarFuncionarios" 

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(({ data }) => {
        setFuncionarios(data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return Funcionarios.map((res, i) => {
      return <FuncionarioTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div>
      <div >
        <h2>Cadastro de funcionários</h2> 
      </div>  
      <div className="table-wrapper">
          <div>
              <Link className="create-link" 
                  to={"/create-funcionario"}>
                  Criar novo funcionário
              </Link>
          </div>
          <div className="table-wrapper">
              <Table striped bordered hover>
                  <thead>
                  <tr>
                      
                      <th scope="col">Matricula</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Cargo</th>
                      <th scope="col">Area</th>
                      <th scope="col">Salarios</th>
                      <th scope="col">Data de Admissão</th>
                      <th scope="col">Opções</th>
                  </tr>
                  </thead>
                  <tbody>{DataTable()}</tbody>
            </Table>
          </div>
      </div>
    </div>
  );
};
  
export default FuncionarioList;
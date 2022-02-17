import React from "react";
import { Nav, Navbar, Container, Row, Col, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  

import Createfuncionario   from   "./Componente/Funcionarios/create-funcionario.component";
import Editfuncionario     from   "./Componente/Funcionarios/edit-funcionario.component";
import funcionarioList     from   "./Componente/Funcionarios/funcionario-list.component";
import ValorDistrinuirForm from   "./Componente/ValorDistribuir/edit-valordistribuir.component";
import LucroPorColaborador from   "./Componente/Relatorios/LucroPorColaborador/lucrofuncionarionario-list.component";
import TotalColaborador from   "./Componente/Relatorios/TotalDeFuncionarios/totalfuncionarionario-list.component";
import TotalDistribuido from   "./Componente/Relatorios/TotalDistribuido/totaldistribuido-list.component";
import TotalDisponibilizado from   "./Componente/Relatorios/TotalDisponibilizado/totaldisponibilizado-list.component";
import Saldo from   "./Componente/Relatorios/Saldo/saldo-list.component";
import EditDistribuirLucro from   "./Componente/DistribuirLucros/edit-distribuirLucros.component";



const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/funcionario-list"} 
                  className="nav-link">
                  Desafio Turim
                </Link>
              </Navbar.Brand>
  
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/funcionario-list"} 
                    className="nav-link">
                    Funcionários
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/edit-valordistribuir"} 
                    className="nav-link">
                    Valor a Distribuir
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/edit-distribuirLucros"} 
                    className="nav-link">
                    Distribuir os lucros
                  </Link>
                </Nav>
                <NavDropdown title="Relatórios" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/lucrofuncionarionario-list">Recupera quanto cada colaborador irá receber</NavDropdown.Item>
                  <NavDropdown.Item href="/totalfuncionarionario-list">Recupera o total de funcionários</NavDropdown.Item>
                  <NavDropdown.Item href="/totaldistribuido-list">Recupera o total distribuído </NavDropdown.Item>
                  <NavDropdown.Item href="/totaldisponibilizado-list">Recupera o total  disponibilizado</NavDropdown.Item>
                  <NavDropdown.Item href="/saldo-list">Recupera o saldo entre disponibilizado e disponível</NavDropdown.Item>

                </NavDropdown>
              </Nav>
            </Container>
          </Navbar>
        </header>
  
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" 
                    component={funcionarioList} />
                  <Route path="/create-funcionario" 
                    component={Createfuncionario} />
                  <Route path="/edit-funcionario/:id" 
                    component={Editfuncionario} />
                  <Route path="/funcionario-list" 
                    component={funcionarioList} />
                   <Route path="/edit-valordistribuir" 
                    component={ValorDistrinuirForm} /> 
                   <Route path="/lucrofuncionarionario-list" 
                    component={LucroPorColaborador} /> 
                   <Route path="/totalfuncionarionario-list" 
                    component={TotalColaborador} /> 
                   <Route path="/totaldistribuido-list" 
                    component={TotalDistribuido} />
                    <Route path="/totaldisponibilizado-list" 
                    component={TotalDisponibilizado} />
                    <Route path="/saldo-list" 
                    component={Saldo} />

                    <Route path="/edit-distribuirLucros" 
                    component={EditDistribuirLucro} />


                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};
  
export default App;
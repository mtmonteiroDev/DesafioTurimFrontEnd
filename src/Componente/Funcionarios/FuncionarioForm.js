import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button, Dropdown, DropdownButton } from "react-bootstrap";
  
const FuncionarioForm = (props) => {
  const validationSchema = Yup.object().shape({
    matricula: Yup.string().required("Rquired"),
    nome: Yup.string().required("Rquired"),
    area: Yup.string().required("Rquired"),
    cargo: Yup.string().required("Rquired"),
    salario: Yup.string().required("Rquired"),
    dataadmissao: Yup.string().required("Rquired"),
  });
 

 const [Areas, setListaAreas] = useState([]);
 
 useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("http://localhost:5998/api/AreaAtuacao/ListarAerasdeAtuacao")
      response = await response.json()
      setListaAreas(response)
      console.log("areas 5", Areas);
    }

    fetchMyAPI()
  }, [])
  return (
    <div className="form-wrapper">
        
      <Formik {...props} validationSchema={validationSchema}>
        
        <Form>
          <FormGroup>
            Matricula
            <Field name="matricula" type="text" 
                className="form-control" />
            <ErrorMessage
              name="matricula"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            Nome  
            <Field name="nome" type="text" 
                className="form-control" />
            <ErrorMessage
              name="nome"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            Area
            <Field
                as="select"
                
                 className="form-select" name="area">
                <option value="">Selecione uma área de atuação</option>                    
                <option value="Diretoria">Diretoria</option>
                <option value="Contabilidade">Contabilidade</option>
                <option value="Relacionamento com o cliente">Relacionamento com o cliente</option>
                <option value="Seviços Gerais">Seviços Gerais</option>
                <option value="Tecnologia">Tecnologia</option>

                
                {/*
                    
                    Areas.map((res, value) => {
                        <option value="raaaa">res.areaAtuacaoId}</option>
                        console.log("Areas 4" , res.areaAtuacaoId)
                    })
                 */           
                }   
            </Field>
            <ErrorMessage
              name="area"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
           
      
          
          <FormGroup>
            Cargo  
            <p>
                Estagiário <Field name="cargo" type="radio" className="form-radio" value="Estagiário" />
                Funcionário <Field name="cargo" type="radio" className="form-radio" value="Funcionário"/>
            </p>
            <ErrorMessage
                name="cargo"
                className="d-block invalid-feedback"
                component="span"
                />
          </FormGroup>
          <FormGroup>
            Salario  
            <Field name="salario" type="number" 
                className="form-control" />
            <ErrorMessage
              name="salario"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
             Data de adimissão 
            <Field name="dataadmissao" type="date" 
                className="form-control" />
            <ErrorMessage
              name="dataadmissao"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>

          <Button variant="danger" size="lg" 
            block="block" type="submit" className="gravar">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default FuncionarioForm;
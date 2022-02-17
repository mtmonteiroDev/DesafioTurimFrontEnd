import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button, Dropdown, DropdownButton } from "react-bootstrap";
  
const ValorDistrinuirForm = (props) => {
  const validationSchema = Yup.object().shape({
    valorDistribuir: Yup.string().required("Rquired"),
    
  });
 

  return (
    <div className="form-wrapper">
        
      <Formik {...props} validationSchema={validationSchema}>
        
        <Form>
          <FormGroup>
            Valor
            <Field name="valorDistribuir" type="number" 
                className="form-control" />
            <ErrorMessage
              name="valorDistribuir"
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
  
export default ValorDistrinuirForm;
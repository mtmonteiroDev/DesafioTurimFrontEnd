import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button, Dropdown, DropdownButton } from "react-bootstrap";
  
const ValorDistrinuirForm = (props) => {
  
 

  return (
    <div className="form-wrapper">
        
      <Formik {...props} >
        
        <Form>
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
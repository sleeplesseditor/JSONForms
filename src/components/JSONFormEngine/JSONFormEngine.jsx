import React from 'react';
import 'react-json-form-engine/dist/css/styles.min.css';
import { Form, FormEngine } from 'react-json-form-engine';
import TestEngineSchema from './TestEngineSchema.json';

const instance = new FormEngine(TestEngineSchema); 

const LoginForm = () => (
  <Form
    instance={instance}
    onUpdate={(id, value) => {
      console.log(`FieldId ${id} was changed to ${value}`);
      console.log(instance.getValidationResultById(id));
      console.log(instance.getValidationStatusById(id));
    }}
    onSubmit={hasError => {
      if (hasError) {
        console.log(instance.getValidationResults()); 
      }
      console.log(instance.getModel());                     
      console.log(instance.serializeModel());         
    }}
  />
);

export default LoginForm;
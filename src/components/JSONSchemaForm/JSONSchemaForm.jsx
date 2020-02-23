import React from 'react';
import Form from 'react-jsonschema-form';
import './JSONSchemaForm.scss';

const JSONSchemaForm = (props) => {
  
  const handleSubmit = ({formData}) => {
    console.log(formData);
  }

  return (
    <Form 
      schema={props.schema}
      onSubmit={handleSubmit}
    />
  )
}

export default JSONSchemaForm;
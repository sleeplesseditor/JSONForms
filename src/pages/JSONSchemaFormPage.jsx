import React from 'react';
import JSONSchemaForm from '../components/JSONSchemaForm/JSONSchemaForm';
import TestSchema from '../components/JSONSchemaForm/TestSchema.json';

function JSONSchemaFormPage() {
  return (
    <div className="App">
        <h2>JSON Schema Form Example</h2>
        <JSONSchemaForm 
          schema={TestSchema}
        />
        <p>Relies on Bootstrap HTML semantics – to be loaded separately</p>
    </div>
  );
}

export default JSONSchemaFormPage;
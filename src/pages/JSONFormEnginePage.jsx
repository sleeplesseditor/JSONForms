import React from 'react';
import LoginForm from '../components/JSONFormEngine/JSONFormEngine';
import TestEngineSchema from '../components/JSONFormEngine/TestEngineSchema.json';

function JSONFormEnginePage() {
  return (
    <div className="App">
        <h2>JSON Form Engine Example</h2>
        <LoginForm 
          schema={TestEngineSchema}
        />
        <p>Relies on Bulma HTML semantics – loaded as part of implementation</p>
    </div>
  );
}

export default JSONFormEnginePage;
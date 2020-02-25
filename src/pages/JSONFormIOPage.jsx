import React from 'react';
import JSONFormIO from '../components/JSONFormIO/JSONFormIO';
import Schema from '../components/JSONFormIO/schema/schema.json';
import Data from '../components/JSONFormIO/schema/data.json';
import UISchema from '../components/JSONFormIO/schema/uischema.json';

function JSONFormIOPage() {
  return (
    <div className="App">
        <h2>JSON Form.io Example</h2>
        <JSONFormIO 
          schema={Schema}
          uischema={UISchema}
          data={Data}
        />
    </div>
  );
}

export default JSONFormIOPage;
import React from 'react';
import JSONFormIO from '../components/JSONFormIO/JSONFormIO';
import { HorizontalLayout } from '@jsonforms/vanilla-renderers';
import Schema from '../components/JSONFormIO/schema/schema.json';
import Data from '../components/JSONFormIO/schema/data.json';

function JSONFormIOPage() {
  return (
    <div className="App">
        <h2>JSON Form.io Example</h2>
        <JSONFormIO 
          schema={Schema}
          uischema={HorizontalLayout}
          data={Data}
        />
    </div>
  );
}

export default JSONFormIOPage;
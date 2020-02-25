import React from 'react';
import { JsonForms } from '@jsonforms/react';
import { vanillaRenderers, vanillaCells } from '@jsonforms/vanilla-renderers';
import './JSONFormIO.scss';

const JSONFormIo = (props) => {
  return (
    <div>
      <JsonForms 
        schema={props.schema}
        uischema={props.uischema}
        data={props.data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
      />
    </div>
  )
}

export default JSONFormIo;
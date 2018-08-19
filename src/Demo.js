import React from 'react';

import BaseInput from './base_components/base_input/input';

const inputCallback = val => (
  console.log(val)
);

const demo = () => (
  <div style={{ margin: '50px' }}>
    <h1>Pagína de Demonstração dos componentes base!</h1>
    <div>
      <h2>Base input</h2>
      <BaseInput
        placeholder="Teste"
        onTextChange={inputCallback}
        type="text"
      />
    </div>
  </div>
);

export default demo;

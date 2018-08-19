import React from 'react';

import BaseInput from './base_components/base_input/input';

const inputCallback = val => (
  console.log(val)
);

const demo = () => (
  <div>
    <h1>Pagína de Demonstração dos componentes base!</h1>
    <div style={{ margin: '20px' }}>
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

import React from 'react';

import BaseInput from './base_components/base_input/input';
import BaseButton from './base_components/base_button/button';

const inputCallback = val => (
  console.log(val)
);

const buttonCallback = () => (
  console.log('Button was clicked')
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
    <div>
      <h2>Base button</h2>
      <BaseButton
        name="Primary"
        click={buttonCallback}
      />
      <BaseButton
        name="Warning"
        type="warning"
        click={buttonCallback}
      />
      <BaseButton
        name="Danger"
        type="danger"
        click={buttonCallback}
      />
      <BaseButton
        name="With icon"
        icon="fa fa-plus fa-2x"
        click={buttonCallback}
      />
      <BaseButton
        name="With icon and Disabled"
        icon="fa fa-plus fa-2x"
        disabled
        click={buttonCallback}
      />
    </div>
  </div>
);

export default demo;

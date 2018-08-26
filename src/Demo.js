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
  <div className="general-content">
    <h1>Pagína de Demonstração dos componentes base!</h1>
    <div className="input-content">
      <h2>Base input</h2>
      <BaseInput
        placeholder="Teste"
        onTextChange={inputCallback}
        type="text"
      />
    </div>
    <div className="buttons-content">
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
        name="Success"
        type="success"
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
        name="With icon success"
        type="success"
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

    <style jsx>{`
      .general-content {
        display: flex;
        position: relative;
        flex-direction: column;
        overflow: hidden;
        background-color: #fafafa;
        padding: 10px 20px;
        border-radius: 10px;
      }

      .input-content {
        display: flex;
        flex-direction: column;
        width: 300px;
      }

      .buttons-content {
        display: flex;
        flex-direction: column;
        width: 300px;
      }
    `}
    </style>
  </div>
);

export default demo;

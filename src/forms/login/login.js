import React, { Component } from 'react';

import BaseButton from '../../base_components/base_button/button';
import BaseInput from '../../base_components/base_input/input';
import BaseCard from '../../base_components/base_card/base-card';

import BackgroundImage from '../../imgs/Imagem.jpg';
import AtumoImage from '../../imgs/ATUMO.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      pwd: '',
    };

    this.makeLogin = this.makeLogin.bind(this);
  }

  makeLogin() {
    const { user, pwd } = this.state;
    console.log(user);
    console.log(pwd);
  }

  inputsComponent() {
    return (
      <div>
        <div className="row">
          <BaseInput type="text" placeholder="Usuário" onTextChange={value => this.setState({ user: value })} />
        </div>
        <div className="row">
          <BaseInput type="password" placeholder="Senha" onTextChange={value => this.setState({ pwd: value })} />
        </div>
        <div className="action">
          <BaseButton type="primary" name="Login" click={() => { this.makeLogin(); }} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <div className="brand">
            <img src={AtumoImage} alt="" />
          </div>
          <div className="register">
            <a href="http://www.atumo.com.br">Inscreva-se</a>
          </div>
        </div>
        <div className="wrapper">
          <div className="center-column">
            <BaseCard headerName="Login" innerComponent={this.inputsComponent()} />
          </div>
        </div>
        <style jsx="true"> {`
          .row {
            padding: 15px 60px 0 25px;
          }
          .action {
            padding: 15px 30px 0 25px;
          }
          a {
            font-size: 15px;
            color: rgb(138, 43, 226);
            text-decoration: none;
          }
          .center-column {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
          .menu {
            display:flex;
            height:50px;
            align-items: center;
            justify-content: center;
          }
          .brand {
            display:flex;
            flex: 2;
            justify-content: center;
          }
          .register {
            display:flex;
            flex: 2;
            justify-content: center;
          }
          .wrapper {
            position: absolute;
            left:0;
            width:100%;
            height:100%;
            background-size: cover;
            background-image: url(${BackgroundImage})
          }
        `}
        </style>
      </div>
    );
  }
}

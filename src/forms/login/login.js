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
      remindMe: false,
    };

    this.makeLogin = this.makeLogin.bind(this);
  }

  makeLogin() {
    const { user, pwd } = this.state;
    console.log(user);
    console.log(pwd);
  }

  inputsComponent() {
    const { remindMe } = this.state;

    return (
      <div className="input-content">
        <span className="input-title">Ou faça login com um e-mail</span>
        <div className="row">
          <BaseInput type="text" placeholder="Seu e-mail" onChange={value => this.setState({ user: value })} />
        </div>
        <div className="row">
          <BaseInput type="password" placeholder="Senha" onChange={value => this.setState({ pwd: value })} />
        </div>
        <div className="remind-content">
          <BaseInput type="checkbox" value={remindMe} onChange={() => this.setState({ remindMe: !remindMe })} /> Lembre-me
        </div>
        <div className="action">
          <BaseButton type="primary" name="Fazer Login" click={() => { this.makeLogin(); }} />
        </div>
        <div className="divider"></div>
        <a href="/">Esqueceu sua senha?</a>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">

          <div className="brand">
            <img src={AtumoImage} alt="" />
          </div>
          <div className="register">
            <BaseButton type="transparent" name="Inscreva-se" click={() => { window.open('http://www.atumo.com.br'); }} />
          </div>
        </div>

        <div className="wrapper">
          <div className="center-column">
            <BaseCard headerName="Fazer login" innerComponent={this.inputsComponent()} />
          </div>
        </div>
        <style jsx="true"> {`
          .input-content {
            min-width: 315.41px;
            max-width: 315.41px;
            text-align: center;
          }

          .input-content a {
            font-size: 18px;
            color: #616161;
            text-decoration: none;
          }

          .input-title {
            font-size: 18px;
            color: rgb(138, 43, 226);
            font-style: italic;
          }

          .row {
            width: 100%;
            margin: 25px 0;
          }

          .remind-content {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            color: rgb(138, 43, 226);
            font-weight: 500;
            margin: 25px 0;
          }

          .action {
            width: 100%;
          }
          
          .center-column {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }

          .navbar {
            display:flex;
            height:80px;
            align-items: center;
            justify-content: space-around;
            padding: 0 365px;
          }

          .brand {
            max-width: 133px;
            max-height: 29px;
            display:flex;
            justify-content: center;
          }

          .register {
            display:flex;
            justify-content: center;
            max-width: 112.72px;
            min-width: 112.72px;
          }

          .wrapper {
            position: absolute;
            left:0;
            width:100%;
            height:100%;
            background-size: cover;
            background-image: url(${BackgroundImage})
          }

          .divider {
            border: solid .5px;
            border-color: rgb(138, 43, 226);
            margin: 30px 0;
          }
        `}
        </style>
      </div>
    );
  }
}

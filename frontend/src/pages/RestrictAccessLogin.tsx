import React from 'react';
import LogoContainer from '../components/LogoContainer';

import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/restrict-access-login.css'

export default function RestrictAccessLogin() {


  return (
    <div id="page-restrict">
      <LogoContainer />
      <div className="login-container">
        <h1>Fazer login</h1>
        <form>
          <div className="input-block">
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" />
          </div>

          <div className="input-block">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" security="true" />
          </div>

          <div className="align-container">
            <div className="remember-check">
              <label htmlFor="remember-me">Lembrar-me</label>
              <input type="checkbox" id="remember-me" />
            </div>
            <a href="/">Esqueci minha senha</a>
          </div>

          <button disabled>Entrar</button>

        </form>

      </div>
      <a className="back-button" href="/">
        <FiArrowLeft size={24} color="#15C3D6" />
      </a>
    </div>
  )
}
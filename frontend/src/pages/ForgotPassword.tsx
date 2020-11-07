import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import LogoContainer from '../components/LogoContainer';

import '../styles/pages/forgot-password.css'
export default function ForgotPassword() {


  return (
    <div id="page-forgotpass">
      <LogoContainer />
      <div className="form-container">
        <div className="form-text">
          <h1>Esqueci a senha</h1>
          <p>
            Sua redefinição de senha será enviada
            para o e-mail cadastrado.
          </p>
        </div>
        <form>
          <div className="input-block">
            <label htmlFor="email">E-mail:</label>
            <input type="text" id="email" />
          </div>
          <button>Entrar</button>
        </form>
      </div>
      <a className="back-button" href="/">
        <FiArrowLeft size={24} color="#15C3D6" />
      </a>
    </div>
  )
}
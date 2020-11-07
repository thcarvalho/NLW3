import React from 'react';
import { FiEye } from 'react-icons/fi';
import LogoContainer from '../components/LogoContainer';
import '../styles/pages/reset-password.css'

export default function ResetPassword() {


  return (
    <div id="page-resetpass">
      <LogoContainer />
      <div className="form-container">
        <div className="form-text">
          <h1>Redefinição de senha</h1>
          <p>
            Escolha uma nova senha para você
            acessar o dashboard do Happy
        </p>
        </div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="input-block">
            <label htmlFor="password">Nova senha</label>
            <div className="input-eye-container">
              <input type="password" id="password" />
              <button className="password-toggle">
                <FiEye size={24} color="#8FA7B2" />
              </button>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="repeat-pass">Repetir senha</label>
            <div className="input-eye-container">
              <input type="password" id="repeat-pass" />
              <button className="password-toggle">
                <FiEye size={24} color="#8FA7B2" />
              </button>
            </div>
          </div>
          <button disabled type="submit" className="btn-submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}
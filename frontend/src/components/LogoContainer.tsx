import React from 'react';

import '../styles/components/logo-container.css'
import logoImg from '../img/logo-big.svg';

export default function LogoContainer() {
  return (
    <aside className="component-logocontainer">
      <img src={logoImg} alt="Happy" />
      <div className="address-text">
        <strong>Rio do Sul</strong>
        <span>Santa Catarina</span>
      </div>
    </aside>
  )
}
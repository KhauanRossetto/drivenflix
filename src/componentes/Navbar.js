import React from 'react';
import logo from '../assets/img/logo/a320d762672523591ef2f811a382ae5c89e262c0.png';

function NavBar() {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="titulo">
            DrivenFlix
        </div>
    </div>
  );
}

export default NavBar;

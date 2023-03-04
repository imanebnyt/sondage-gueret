import React from "react";
import { ReactDOM } from "react";
import '../index.css';
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className="flex">
      <img src={logo} alt="Logo" className="justify-center" />
    </nav>
  );
}

export default Header;

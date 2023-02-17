import React from "react";
import { ReactDOM } from "react";
import './index.css';
import '../components/Header'
import success from '../assets/success.png'

function SondageSucces() {
  return (
    <div>
      <Header/>
      <div>
        <h2>Merci de votre compréhension</h2>
        <img src = {success} alt = "success"/>
        <p>Visualiser les résultats de l'enquête</p>
      </div>
    </div>
  );
}

export default SondageSucces;

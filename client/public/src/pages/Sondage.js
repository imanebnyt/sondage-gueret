import React from "react";
import { ReactDOM } from "react";
import './index.css';
import '../components/Header'
import '../components/Form'

function Sondage() {
  return (
    <div>
      <Header/>
      <div>
        <h1>Sondage Nutrition et Habitudes alimentaires</h1>
        <h2>Informations personelles</h2>
        <Form/>
      </div>
    </div>
  );
}

export default Sondage;

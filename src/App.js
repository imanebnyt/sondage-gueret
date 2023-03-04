import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/Header'

function App() {
  return (
      <div>
        <Header/>
        <div>
          <h1>Sondage Nutrition & habitudes alimentaires</h1>
          <div>
            <p>La commune du Grand-Guéret réalise une enquête sur les habitudes alimentaires de ses habitants. Merci de consacrer quelques minutes à remplir ce questionnaire.</p>
            <p>Commencer le sondage</p>
          </div>
          <div>
            <p>Voir les resultats de l'enquête en cours</p>
          </div>
        </div>
      </div>
  );
}

export default App;

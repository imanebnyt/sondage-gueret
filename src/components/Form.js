import React, { useState } from 'react';
import '../components/Dropdown';
import Dropdown from '../components/Dropdown';
import '../components/Select';


const SondageForm = () => {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [date, setDate] = useState('');
  const [numero, setNumero] = useState('');
  const [adresse, setAdresse] = useState('');
  const [nbFoyer, setNbFoyer] = useState(1);
  const [nbEnfants, setNbEnfants] = useState(1);
  const [nbAdultes, setNbAdultes] = useState(1);

const handleSubmit = async (event) => {
  event.preventDefault();

  const sondage = {
    nom,
    prenom,
    date,
    numero,
    adresse,
    ville,
    nbFoyer,
    nbEnfants,
    nbAdultes,
    selectedOption,
  };

  try {
    await axios.post('/sondage', sondage);
    console.log('Sondage crée');
  } catch (error) {
    console.error(error);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <label>
      Nom :
      <input type="text" value={nom} onChange={(event) => setNom(event.target.value)} required />
    </label>
    <br />
    <label>
      Prénom :
      <input type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} required />
    </label>
    <br />
    <label>
      Date :
      <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
    </label>
    <br />
    <label>
      Numéro :
      <input type="number" value={numero} onChange={(event) => setNumero(event.target.value)} required />
    </label>
    <br />
    <label>
      Adresse :
      <input type="text" value={adresse} onChange={(event) => setAdresse(event.target.value)} required />
    </label>
    <br />
    <Select/>
    <br />
    <label>
      Nombre de foyer :
      <select value={nbFoyer} onChange={(event) => setNbFoyer(event.target.value)}>
        {[...Array(14)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </label>
    <br />
    <label>
      Nombre d'enfants :
      <select value={nbEnfants} onChange={(event) => setNbEnfants(event.target.value)}>
        {[...Array(14)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </label>
    <br />
    <label>
      Nombre d'enfants :
      <select value={nbEnfants} onChange={(event) => setNbAdultes(event.target.value)}>
        {[...Array(14)].map((_, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
    </label>
    <br />
    <Dropdown/>
    <button type="submit">Soumettre</button>
    </form>
  )
}

export default Form;
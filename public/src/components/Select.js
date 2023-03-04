import React, { useState } from 'react';

function Select() {
  const villes = [
    "Ajain",
    "Anzême",
    "Bussière-Dunoise",
    "Gartempe",
    "Glénic", 
    "Guéret",
    "Jouillat",
    "La Brionne",
    "La Chapelle-Taillefert",
    "La Saunière",
    "Mazeirat",
    "Montaigut-le-blanc",
    "Peyrabout",
    "Saint-Christophe",
    "Saint-Eloi",
    "Saint-Fiel",
    "Sainte-Feyre",
    "Saint-Laurent",
    "Saint-Léger-le-Guérétois",
    "Saint-Silvain-Montaigut",
    "Saint-Sulpice-le-Guéretois",
    "Saint-Vaury",
    "Saint-Victor-en-Marche",
    "Saint-Yrieix-les-Bois",
    "Savennes"
];

  const [selectedVille, setSelectedVille] = useState('');

  const handleOptionChange = (event) => {
    setSelectedVille(event.target.value);
  }

  return (
    <div>
      <select value={selectedVille} onChange={handleOptionChange}>
        {villes.map((ville, index) => (
          <option key={index} value={ville}>{ville}</option>
        ))}
      </select>
      <p>{selectedVille}</p>
    </div>
  );
}

export default Select;

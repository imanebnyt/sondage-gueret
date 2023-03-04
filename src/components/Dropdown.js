import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dropdown() {
  const [aliments, setAliments] = useState([]);
  const [selectedAliments, setSelectedAliments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/aliments');
      setAliments(result.data);
    }
    fetchData();
  }, []);

  const handleSelect = (event) => {
    const options = event.target.options;
    const selectedValues = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setSelectedAliments(selectedValues);
  };

  return (
    <div>
      <select multiple value={selectedAliments} onChange={handleSelect}>
        {aliments.map((aliment) => (
          <option key={aliment._id} value={aliment.alim_nom_fr}>
            {aliment.alim_nom_fr}
          </option>
        ))}
      </select>
      <p>Aliments séléctionnés: {selectedAliments.join(', ')}</p>
    </div>
  );
}

export default Dropdown;

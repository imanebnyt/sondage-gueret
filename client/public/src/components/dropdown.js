import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dropdown() {
  const [aliments, setAliments] = useState([]);
  const [selectedAliment, setSelectedAliment] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/aliments');
      setAliments(result.data);
    }
    fetchData();
  }, []);

  const handleSelect = (event) => {
    setSelectedAliment(event.target.value);
  }

  return (
    <div>
      <select value={selectedAliment} onChange={handleSelect}>
        <option value="">Select an aliment</option>
        {aliments.slice(0, 10).map((aliment) => (
          <option key={aliment._id} value={aliment.alim_nom_fr}>
            {aliment.alim_nom_fr}
          </option>
        ))}
      </select>
      <p>Aliment séléctionné: {selectedAliment}</p>
    </div>
  );
}

export default Dropdown;

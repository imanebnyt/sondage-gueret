import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Resultats({ pollId }) {
  const [optionCounts, setOptionCounts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/sondage', {
        params: {
          fields: 'selectedOption'
        }
      });
      const counts = response.data.reduce((acc, curr) => {
        const optionId = curr.option;
        acc[optionId] = (acc[optionId] || 0) + 1;
        return acc;
      }, {});
      const optionsWithCounts = Object.entries(counts).map(([optionId, count]) => ({
        option: optionId,
        count: count
      }));
      optionsWithCounts.sort((a, b) => b.count - a.count);
      setOptionCounts(optionsWithCounts.slice(0, 10));
    }
    fetchData();
  }, [pollId]);

  return (
    <div>
      <h2>Voici les 10 aliments préferés des habitants du Grand-Guéret</h2>
      <ul>
        {optionCounts.map((optionCount) => (
          <li key={optionCount.option}>
            {optionCount.count} votes - {options.find((option) => option._id === optionCount.option).text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resultats;

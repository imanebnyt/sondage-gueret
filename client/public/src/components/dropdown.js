import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const Dropdown = ({ collection }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/${collection}`);
      setOptions(result.data);
    };

    fetchData();
  }, [collection]);

  return (
    <Select options={options} />
  );
};

export default Dropdown;

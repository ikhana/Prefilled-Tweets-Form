import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import './CountryStep.css';

function CountryStep({ formData, setFormData }) {
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(formData.country || null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data.map((country) => ({
        value: country.name.common,
        label: country.name.common,
      }));
      setCountries(countries);
    };
    fetchCountries();
  }, []);

  const handleNext = () => {
    if (!country || !country.value) {
      setError("Please select a country.");
      return;
    }
    setFormData({ ...formData, country: country.value });
    navigate('/step-five');  // or whatever is the next step
  };

  const handleBack = () => {
    navigate(-1); // Goes back to the previous page (StepThree)
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>"Even in the vast universe, home is where the heart is! Select your planet... ahem... country from the dropdown list!"
</h2>
      <Select
        options={countries}
        value={country}
        onChange={setCountry}
        className="select"
        styles={{
          option: provided => ({ ...provided, color: 'black' }),
        }}
      />
    {error && <p style={{ color: "red", backgroundColor: "white" }}>{error}</p>}
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext} disabled={!country}>Next</button>
      </div>
    </div>
  );
}

export default CountryStep;

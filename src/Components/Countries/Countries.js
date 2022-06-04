import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>Total Countries: {countries.length}</p>
      <div className="countries-container">
        {countries.map((country) => (<Country 
        country={country}
        key={country.cca3}
        ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

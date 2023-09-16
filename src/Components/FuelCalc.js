import React, { useState } from 'react';
import './FuelCalc.css'

function FuelCalc({ updateTotalSum }) {
  const [fuelType, setFuelType] = useState('gasoline'); // Default to gasoline
  const [literUsed, setLiter] = useState('');
  const [results, setResults] = useState(null);
  const [previousResult, setPreviousResult] = useState(0);

  function calculateEmissions(litersConsumed) {
    const emissionsData = {
      gasoline: {
        gramsPerLiter: 8887, // grams of CO2 per liter of gasoline
      },
      diesel: {
        gramsPerLiter: 10180, // grams of CO2 per liter of diesel
      },
    };

    const metricTonsPerLiter = emissionsData[fuelType].gramsPerLiter * 1e-3; // Convert to metric tons
    return (litersConsumed * metricTonsPerLiter).toFixed(3);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const previousMetricTonsCO2 = previousResult !== null ? parseFloat(previousResult) : 0; 
    const newMetricTonsCO2 = calculateEmissions(parseFloat(literUsed));
    const totalMetricTonsCO2 = previousMetricTonsCO2 - newMetricTonsCO2;
  
    updateTotalSum(newMetricTonsCO2, 0, 0, 0);
    setPreviousResult(newMetricTonsCO2);
    setResults(newMetricTonsCO2);
  };
  

  return (
    <div className="FuelContainer">
      <div className="fuel-header">
        <h1>Fuel Consumption</h1>
      </div>
      <div className="fuel-form">
        <form onSubmit={handleSubmit}>
          <h3>Fuel consumption in a year (liters)</h3>
          {/* <label> */}
          <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="gasoline">Gasoline</option>
            <option value="diesel">Diesel</option>
          </select>
          {/* </label> */}
          <input
            type="number"
            placeholder="Enter liters"
            value={literUsed}
            onChange={(e) => setLiter(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="fuel-results">
            <h3>Carbon Emissions:</h3>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FuelCalc;

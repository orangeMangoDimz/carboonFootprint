import React, { useState } from 'react';
import './PropaneCalc.css'

function PropaneCalc({ updateTotalSum }) {
  const [litersUsed, setLitersUsed] = useState('');
  const [results, setResults] = useState(null);
  const [previousResult, setPreviousResult] = useState(0);

  function calculatePropaneEmissions(litreUsed) {
    const gallonsUsed = litreUsed/3.785412
    const kgCO2PerBarrel = 235.0; // kg of CO2 per barrel of propane
    const barrelsPerGallon = 1 / 42; // Convert gallons to barrels
    const kgToMetricTonConversion = 1 / 1000; // Convert kg to metric tons
  
    const metricTonsCO2 = gallonsUsed * barrelsPerGallon * kgCO2PerBarrel * kgToMetricTonConversion;
    return metricTonsCO2.toFixed(3);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const previousMetricTonsCO2 = previousResult !== null ? parseFloat(previousResult) : 0; 
    const newMetricTonsCO2 = calculatePropaneEmissions(parseFloat(litersUsed));
    const totalMetricTonsCO2 = newMetricTonsCO2 - previousMetricTonsCO2;
  
    updateTotalSum(0, newMetricTonsCO2, 0, 0);
    setPreviousResult(newMetricTonsCO2);
    setResults(newMetricTonsCO2);
  };
  
  

  return (
    <div className="PropaneContainer">
      <div className="propane-header">
        <h1>Propane Consumption</h1>
      </div>
      <div className="propane-form">
        <form onSubmit={handleSubmit}>
          <h3>Propane consumption in a year (liters)</h3>
          <input
            type="number"
            placeholder="Enter liters"
            value={litersUsed}
            onChange={(e) => setLitersUsed(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="propane-results">
            <h3>Carbon Emissions:</h3>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropaneCalc;

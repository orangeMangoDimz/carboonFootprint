import React, { useState } from 'react';
import './ElectricityCalc.css'


function ElectricityCalc({ updateTotalSum }) {
  const [kWhUsed, setkWhUsed] = useState('');
  const [results, setResults] = useState(null);
  const [previousResult, setPreviousResult] = useState(0);

  function calculateElectricityEmissions(kWhUsed) {
    const lbsCO2PerMWhGenerated = 884.2; 
    const MWhDeliveredToGeneratedRatio = 1 / (1 - 0.073);
    const kWhToMWhConversion = 1 / 1000; 
    const lbToMetricTonConversion = 1 / 2204.6; 
  
    const metricTonsCO2 = kWhUsed * lbsCO2PerMWhGenerated * MWhDeliveredToGeneratedRatio * kWhToMWhConversion * lbToMetricTonConversion;
    return metricTonsCO2.toFixed(3);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const previousMetricTonsCO2 = previousResult !== null ? parseFloat(previousResult) : 0; 
    const newMetricTonsCO2 = calculateElectricityEmissions(parseFloat(kWhUsed));
    const totalMetricTonsCO2 = previousMetricTonsCO2 - newMetricTonsCO2;
  
    updateTotalSum(0, 0, newMetricTonsCO2, 0);
    setPreviousResult(newMetricTonsCO2);
    setResults(newMetricTonsCO2);
  };
  

  return (
    <div className="ElectricityContainer">
      <div className="electricity-header">
        <h1>Electricity Consumption</h1>
      </div>
      <div className="electricity-form">
        <form onSubmit={handleSubmit}>
          <h3>Electricity consumption in a year (kWh)</h3>
          <input
            type="number"
            placeholder="Enter kWh"
            value={kWhUsed}
            onChange={(e) => setkWhUsed(e.target.value)}
            required
          />
          <button type="submit">Calculate</button>
        </form>
        {results !== null && (
          <div className="electricity-results">
            <h3>Carbon Emissions:</h3>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ElectricityCalc;

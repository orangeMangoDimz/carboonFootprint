import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './WasteCalc.css'

function WasteCalc({ updateTotalSum }) {
  const [tonUsed, setTon] = useState('');
  const [results, setResults] = useState(null);
  const [previousResult, setPreviousResult] = useState(0);

  function calculateWasteEmissions(tonsRecycled) {
    const emissionsSavedPerTon = 2.89; // metric tons CO2 equivalent per ton of waste recycled instead of landfilled
    const metricTonsCO2Saved = tonsRecycled * emissionsSavedPerTon;
    return metricTonsCO2Saved.toFixed(3);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const previousMetricTonsCO2 = previousResult !== null ? parseFloat(previousResult) : 0; 
    const newMetricTonsCO2 = calculateWasteEmissions(parseFloat(tonUsed));
    // const totalMetricTonsCO2 = previousMetricTonsCO2 - newMetricTonsCO2;

    updateTotalSum(0, 0, 0, newMetricTonsCO2);
    setPreviousResult(newMetricTonsCO2);
    setResults(newMetricTonsCO2);
  };

  return (
    <div className="WasteContainer">
      <div className="waste-header">
        <h1>Waste Consumption</h1>
      </div>
      <div className="waste-form">
        <form onSubmit={handleSubmit}>
          <h3>Waste consumption in a year (tons)</h3>
          <input
            type="number"
            placeholder="Enter tons"
            value={tonUsed}
            onChange={(e) => setTon(e.target.value)}
            required
          />
          <Button type='submit' bg='secondary' as={Button}>Calculate</Button>
        </form>
        {results !== null && (
          <div className="waste-results">
            <h3>Carbon Emissions:</h3>
            <p>{results} metric tons CO2</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default WasteCalc;

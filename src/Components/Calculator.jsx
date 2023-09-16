import React, { useState } from 'react';
import PropaneCalc from './PropaneCalc';
import ElectricityCalc from './ElectricityCalc';
import WasteCalc from './WasteCalc';
import FuelCalc from './FuelCalc';
import './Calculator.css'

const Calculator = () => {
    const [totalSum, setTotalSum] = useState(0)
    const [fuelValue, setFuelValue] = useState(0)
    const [electricityValue, setElectricityValue] = useState(0)
    const [propaneValue, setPropaneValue] = useState(0)
    const [wasteValue, setWasteValue] = useState(0)

    const updateTotal = (value) => {
        setTotalSum(parseFloat(totalSum) + parseFloat(value))
    }

    const updateTotal2 = (fuelValues, propaneValues, electricityValues, wasteValues) => {
        if (fuelValues !== 0 && fuelValues !== null) {
            updateTotal(fuelValues - fuelValue)
            setFuelValue(fuelValues)
        }
        if (propaneValues !== 0 && propaneValues !== null) {
            updateTotal(propaneValues - propaneValue)
            setPropaneValue(propaneValues)
        }
        if (electricityValues !== 0 && electricityValues !== null) {
            updateTotal(electricityValues - electricityValue)
            setElectricityValue(electricityValues)
        }
        if (wasteValues !== 0 && wasteValues !== null) {
            updateTotal(wasteValues - wasteValue)
            setWasteValue(wasteValues)
        }
        console.log("#Fuel Value: " + fuelValue + " Propane Value: " + propaneValue + " Electricity Value: " + electricityValue + " Waste Value: " + wasteValue)
        // console.log("Fuel Values: " + fuelValues + " Propane Values: " + prop  aneValues + " Electricity Values: " + electricityValues + " Waste Values: " + wasteValues)
    }

    return (
        <>
        <div className='calculator-container'></div>
            <div className='container card rounded shadow bg-body-tertiary rounded calcs-section' >
                <h1 style={{ color: '#313638' }} className='text-center mb-5'>Calculate your carbon footprint now!</h1>
                <div className="calc-section">
                    <div className='row'>
                        <div className='col'>
                            <PropaneCalc updateTotalSum={updateTotal2} />
                        </div>
                        <div className='col'>
                            <ElectricityCalc updateTotalSum={updateTotal2} />
                        </div>
                        <div className='col'>
                            <WasteCalc updateTotalSum={updateTotal2} />
                        </div>
                        <div className='col'>
                            <FuelCalc updateTotalSum={updateTotal2} />
                        </div>
                    </div>
                </div>

                <div className="calc-result">
                    <h2><br></br>Total Carbon Footprint: <span className='text-warning'>{totalSum < 0 ? alert('Invalid Input') : totalSum}</span> metric tons CO2</h2>
                </div>
                <div className="calc-disclaimer mt-3">
                    <div className="disclaimer-title text-danger">
                        <p><b>Disclaimer:</b></p>
                    </div>
                    <div className="disclaimer-text">
                        <p>Calculating your carbon footprint involves various metrics, each contributing to a comprehensive assessment of your environmental impact. However, on this platform, we focus on four key metrics to provide you with a simplified estimate of your carbon footprint.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator
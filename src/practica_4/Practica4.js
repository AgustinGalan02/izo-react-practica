import React, { useState } from 'react';
import Input1 from './Input';
import Checkbox from './Checkbox';
import LogicGates from './LogicGates';
import './Practica4.css'

function Practica4() {
  const [selectedGate, setSelectedGate] = useState('');
  const [input1Value, setInput1Value] = useState(Math.round(Math.random()));
  const [checkboxValue, setCheckboxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);

  const handleGateChange = (event) => {
    setSelectedGate(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="input1">Entrada 1:</label>
        <Input1 value={input1Value} onChange={setInput1Value} />
      </div>
      <div>
        <Checkbox value={checkboxValue} onChange={setCheckboxValue} />
      </div>
      <div>
        <label htmlFor="range">Entrada 3:</label>
        <input type="range" min="0" max="1" value={rangeValue} onChange={(e) => setRangeValue(Number(e.target.value))} />
      </div>
      <div>
        <label htmlFor="radio">Entrada 4:</label>
        <div>
        <input type="radio" value="0" checked={radioValue === 0} onChange={(e) => setRadioValue(Number(e.target.value))} /> 0
        </div>
        <input type="radio" value="1" checked={radioValue === 1} onChange={(e) => setRadioValue(Number(e.target.value))} /> 1
      </div>
      <div>
        <label htmlFor="selectGate">Compuerta lógica</label>
        <select id="selectGate" onChange={handleGateChange}>
          <option value="">Seleccionar</option>
          <option value="or">OR</option>
          <option value="and">AND</option>
          <option value="nand">NAND</option>
          <option value="nor">NOR</option>
          <option value="xor">XOR</option>
        </select>
      </div>
      <div>
  <div style={{ fontSize: '24px' }}>Salida 1:</div>
  <LogicGates selectedGate={selectedGate} input1={input1Value} checkbox={checkboxValue}/>
  <br></br>
  <div style={{ fontSize: '24px' }}>Salida 2:</div>
<LogicGates selectedGate={selectedGate} input1={rangeValue} checkbox={radioValue}/>
</div>
    </div>
  );
}

export default Practica4;

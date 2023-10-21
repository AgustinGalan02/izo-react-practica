import React, { useState, useEffect } from 'react';


const LogicGates = ({ input1, checkbox, selectedGate }) => {

  const [result, setResult] = useState(0); // variable inicial en 0


  useEffect(() => {
    // funcion para calcular resultado
    const calculateResult = () => {
      if (selectedGate === 'or') {
        setResult(input1 || checkbox ? 1 : 0); // Operación OR
      } else if (selectedGate === 'and') {
        setResult(input1 && checkbox ? 1 : 0); // Operación AND
      } else if (selectedGate === 'nand') {
        setResult(!(input1 && checkbox) ? 1 : 0); // Operación NAND
      } else if (selectedGate === 'nor') {
        setResult(!(input1 || checkbox) ? 1 : 0); // Operación NOR
      } else if (selectedGate === 'xor') {
        setResult(input1 !== checkbox ? 1 : 0); // Operación XOR
      } else {
        setResult(0); // Valor predeterminado
      }
    };

    // Llama a la función calculateResult
    calculateResult();
  }, [input1, checkbox, selectedGate]);

  // se muestra el resultado
  return (
    <div>
      Salida: {result}
    </div>
  );
};

export default LogicGates;

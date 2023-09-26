import { useState } from "react";

export default function Practica3({ props }) {
    const [arr, setArr] = useState([]);

    const [valorCajaTexto, setValorCajaTexto] = useState('');
    const onCajaTextoChange = (event) => {
        setValorCajaTexto(event.target.value);
    }

    const onClickHandler = () => {
        let nArr = [...arr, valorCajaTexto];
        setArr(nArr);
    }
    return (
        <div>
            <h3>Práctica 3</h3>
            <input type="text" value={valorCajaTexto} onChange={onCajaTextoChange} />

            <button onClick={onClickHandler}>Agregar</button>
            <ul>
                {arr.map((numero) => (
                    <li>
                        { !isNaN(numero) && <div>{numero} - {numero % 2 === 0 ? 'PAR' : 'IMPAR'}</div> }
                        <input type="text" value={isNaN(numero) && {numero}}/> {numero} 
                        { isNaN(numero) && <div style={{marginLeft:"800px", marginBottom:"22px"}}><div style={{borderStyle:"double", textAlign:"center"}}>{numero}</div></div> }
                    </li>
                ))}
            </ul>
        </div>
    );
}

// [Contador: { counter } / { counter % 2 === 0 ? ‘(par)’ : ‘(impar)’}]
import { useState } from "react";
import './Practica3.css'; 

export default function Practica3({ props }) {
    const [arr, setArr] = useState([]);
    const [valorCajaTexto, setValorCajaTexto] = useState('');

    const onCajaTextoChange = (event) => {
        setValorCajaTexto(event.target.value);
    }

    const onClickHandler = () => {
        if (valorCajaTexto.trim() !== '') {
            let nArr = [...arr, valorCajaTexto];
            setArr(nArr);
            setValorCajaTexto(''); // Limpia el campo de texto después de agregar
        } else {
            alert("Ingresa un valor válido");
        }
    }

    const deleteHandler = (index) => {
        const UpdateArr = [...arr];
        UpdateArr.splice(index, 1);
        setArr(UpdateArr);
    }

    const EditHandler = (index) => {
        const newValue = prompt("Ingresar el nuevo valor:");
        if (newValue !== null) {
            if (newValue.trim() === "") {
                alert("Ingresa un valor");
            } else {
                const UpdateArr = [...arr];
                UpdateArr[index] = newValue;
                setArr(UpdateArr);
            }
        }
    }

    return (
            <div>
            <h3 className="practica-title">Práctica 3</h3>
            <input type="text" className="input-field" value={valorCajaTexto} onChange={onCajaTextoChange} />

            <button className="add-button" onClick={onClickHandler}>Agregar</button>
            <ul>
                {arr.map((numero, index) => (
                    <li key={index} className="list-item">
                        {!isNaN(numero) ? (
                            <div>
                                {numero} - {numero % 2 === 0 ? 'PAR' : 'IMPAR'}
                            </div>
                        ) : (
                            <div className="button-container">
                                <input className="input-field" type="text" value={numero}></input>
                                <button className="add-button" onClick={() => deleteHandler(index)}>Borrar</button>
                                <button className="add-button" onClick={() => EditHandler(index)}>Editar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

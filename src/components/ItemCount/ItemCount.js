import React, { useState } from 'react';
import { FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { Toast } from 'utils/Swal';
import './ItemCount.css';

function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const [counter, setCounter] = useState(Math.min(initial, stock));

    const increase = () => {
        if (counter < stock) setCounter(counter + 1);
        else Toast.fire({ icon: 'warning', title: 'No hay más stock' });
    };

    const decrease = () => {
        if (counter > 1) setCounter(counter - 1);
    };

    if (stock === 0) return <p className="item-count-stock">Sin stock por ahora</p>;

    return (
        <div className="item-count">
            <p className="item-count-stock">{stock} unidades disponibles</p>
            <div className="item-count-row">
                <div className="item-count-stepper" role="group" aria-label="Cantidad">
                    <button type="button" onClick={decrease} disabled={counter <= 1} aria-label="Quitar uno"><FiMinus /></button>
                    <output aria-live="polite">{counter}</output>
                    <button type="button" onClick={increase} disabled={counter >= stock} aria-label="Agregar uno"><FiPlus /></button>
                </div>
                <button type="button" className="btn btn-accent item-count-add" onClick={() => onAdd(counter)}>
                    <FiShoppingBag /> Agregar al carro
                </button>
            </div>
        </div>
    );
}

export default ItemCount;

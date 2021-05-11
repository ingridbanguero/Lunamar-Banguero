import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = (props) => {
    const [count, setCount ] = useState(props.initial);
    const decrement = () => {
        count -  1 < 0 ?  setCount(0) : setCount(count - 1);
    }
    const increment = () =>{
        count + 1 > props.stock ? alert(`Lo sentimos por el momento contamos con ${props.stock} productos de esta referencia en stock.`) : setCount(count + 1)
    } 

    return(
        <div className="ItemCount">
            <div className="Count">
                <button onClick={decrement}>
                    -
                </button>
                <p>{ count }</p>
                <button onClick={increment}>
                    +
                </button>
            </div>
            <button className="AddCart" onClick={() => props.onAdd(count)}>
                AÑADIR AL CARRITO
            </button>
        </div>

    )
}
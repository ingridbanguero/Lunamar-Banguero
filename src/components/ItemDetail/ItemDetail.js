import React, { useState } from 'react';
import './ItemDetail.css';

export const ItemDetail = (props) => {
    const itemProduct =  props.item;

    const [item, setItem] = useState({})

    const getItem = (item) => {
        return new Promise((response, reject) => {
            setTimeout(() => {
                setItem(item)
            }, 2000)
        })
    }

    getItem(itemProduct);

    return(
        <div className="ItemDetail">
            <picture>
                <img src={item.pictureUrl} alt=""/>
            </picture>
            <div className="features">
                <h1>{item.title}</h1>
                <p>${item.price}</p>
            </div>
        </div>
    )
}
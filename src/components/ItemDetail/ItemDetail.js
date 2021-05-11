import React, { useState } from 'react';
import { useParams } from "react-router";
import './ItemDetail.css';
import loader from '../../assets/loader.gif';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";

export const ItemDetail = (props) => {
    const { id } = useParams();
    const itemProducts =  props.item.item;
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(true);

    const handleAdd = (count) => {
        if(count !== 0){
            setCount(false)
        }

    }
    const getItem = (item) => {
        return new Promise((response, reject) => {
            setTimeout(() => {
                setItem(item)
                setLoading(false);
            }, 1000)
        })
    }
    itemProducts.forEach((element) => {
        if(element.id === id){
            getItem(element);
        }
    })
    if(loading){
        return(
            <div className="ItemDetail">
                <img src= {loader} className="loader" alt="loader" />
            </div>
        )
    }else{
        return(
            <div className="ItemDetail">
                <picture>
                    <img src={item.pictureUrl} alt=""/>
                </picture>
                <div className="features">
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                    {count ? <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/> :  <Link to={`/cart`}><button className="GoCart">TERMINAR COMPRA</button></Link>}
                </div>
            </div>
        )
    }
}
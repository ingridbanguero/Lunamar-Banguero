import React, { useState } from 'react';
import { useParams } from "react-router";
import './ItemDetail.css';
import loader from '../../assets/loader.gif';

export const ItemDetail = (props) => {
    const { id } = useParams();

    const itemProducts =  props.item.item;
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);

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
                </div>
            </div>
        )
    }
}
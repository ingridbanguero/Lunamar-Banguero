import React, { useState } from 'react';
import { useParams } from "react-router";
import './ItemList.css'
import { Item } from '../Item/Item';
import loader from '../../assets/loader.gif';

export const ItemList = (props) => {
    const productsList = props.products
    const { id } = useParams();
    const [products, setProducts] = useState([])
    let productsFilter = [];
    const [loading, setLoading] = useState(true);
    
    const getProducts = (products) => {
        return new Promise((response, reject) => {
            setTimeout(() => {
                setProducts(products)
                setLoading(false);
            }, 1000)
        })
    }
    if(id){
        productsList.forEach((element) => {
            if(element.category === id){
                productsFilter.push(element)
            }
        })
        getProducts(productsFilter);
    }else{
        getProducts(productsList);
    }
    if(loading){
        return(
            <div className="ItemDetail">
                <img src= {loader} className="loader" alt="loader" />
            </div>
        )
    }else{
        return(
            <div className="ItemList">
                {products.map(product => <Item id={product.id} title={product.title} price={product.price} pictureUrl={product.pictureUrl}/>)}
            </div>
        )
    }
}
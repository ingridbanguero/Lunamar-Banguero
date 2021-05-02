import React, { useState } from 'react';
import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = (props) => {
    const productsList = props.products

    const [products, setProducts] = useState([])
    
    const getProducts = (products) => {
        return new Promise((response, reject) => {
            setTimeout(() => {
                setProducts(products)
            }, 2000)
        })
    }

    getProducts(productsList);

    return(
        <div className="ItemList">
            {products.map(product => <Item id={product.id} title={product.title} price={product.price} pictureUrl={product.pictureUrl}/>)}
        </div>
    )
}
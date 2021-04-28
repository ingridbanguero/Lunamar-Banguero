import React, { useState } from 'react';
import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = () => {
    const productsList = [
        {
            id: 1,
            title: 'Vela de vainilla',
            price: 18000,
            pictureUrl: 'https://i.imgur.com/76mfoLm.jpg'
        },
        {
            id: 2,
            title: 'Vela de frutos rojos',
            price: 19000,
            pictureUrl: 'https://i.imgur.com/oMLnbl8.jpg'
        },
        {
            id: 3,
            title: 'Vela de flor de loto',
            price: 23000,
            pictureUrl: 'https://i.imgur.com/71KZDu3.jpg'
        },
        {
            id: 4,
            title: 'Vela de coco',
            price: 25000,
            pictureUrl: 'https://i.imgur.com/F66RZA5.jpg'
        },
        {
            id: 5,
            title: 'Vela de arandano',
            price: 25000,
            pictureUrl: 'https://i.imgur.com/qG9vYjh.jpg'
        },
        {
            id: 6,
            title: 'Vela de sandia',
            price: 18000,
            pictureUrl: 'https://i.imgur.com/df5VAzg.jpg'
        },
    ]

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
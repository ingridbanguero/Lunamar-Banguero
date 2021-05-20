import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router";
import './ItemDetail.css';
import loader from '../../assets/loader.gif';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from '../Context/cartContext';
import { getFirestore } from '../../firebase';

export const ItemDetail = () => {
    const { id } = useParams();
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(true);
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        if(count !== 0){
            const validateCart = isInCart(item.id);
            if(validateCart){
                setCount(false)
                addToCart(item, count);
            }
        }
    }

    // Traer productos
    useEffect(
        () => {
            const db = getFirestore();
            const itemCollection = db.collection("items")
            itemCollection.get().then((querySnapshot) => {
                    const data = querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    data.forEach((element) => {
                        if(element.id === id){
                            setItem(element)
                        }
                    })
                    setLoading(false);
                }).catch(
                    (error) => console.error('Firestore error: ', error))
    }, [id])

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
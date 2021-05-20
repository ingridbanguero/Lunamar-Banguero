import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import './ItemList.css'
import { Item } from '../Item/Item';
import loader from '../../assets/loader.gif';
import { getFirestore } from '../../firebase';

export const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();
    let productsFilter = [];
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(false);

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
                    if(querySnapshot.size === 0){
                        setEmpty(true);
                    }
                    if(id){
                        data.forEach((element) => {
                            if(element.category === id){
                                productsFilter.push(element)
                            }
                        })
                        setItems(productsFilter);
                    }else{
                        setItems(data);
                    }
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
    }else if(empty){
        return(
            <div>
                <p>Esta es una categoria vacia</p>
            </div>
        )
    }else{
        return(
            <div className="ItemList">
                {items.map(item => <Item id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock}/>)}
            </div>
        )
    }
}
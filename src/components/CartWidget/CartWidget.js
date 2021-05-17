import cartImage from '../../assets/cart.svg';
import './CartWidget.css';
import { useContext } from 'react'
import { CartContext } from '../Context/cartContext'; 

export const CartWidget = () => {
    const { quantity } = useContext(CartContext);
    
    return(
        <picture className="cartWidget">
            <img src={cartImage} alt="Carrito"/>
            <i>{ quantity }</i>
        </picture>
    )
}
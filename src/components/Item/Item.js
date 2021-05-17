import './Item.css';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../Context/cartContext'
 
export const Item = (props) => {
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAdd = (count) => {
        if(count !== 0){
            const validateCart = isInCart(props.id);
            if(validateCart){
                addToCart(props, count);
            }
        }
    }
    return(
        <div className="Item">
            <Link className="ItemContent" to={`/item/${props.id}`}>
                <picture>
                    <img src={props.pictureUrl} alt=""/>
                </picture>
                <p>{props.title}</p>
                <p>${props.price}</p>
            </Link>
            <ItemCount stock={props.stock} initial={0} onAdd={handleAdd}/>
        </div>
    )
}
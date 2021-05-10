import './Item.css';
import { Link } from "react-router-dom";
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = (props) => {
    return(
        <div className="Item">
            <Link className="ItemContent" to={`/item/${props.id}`}>
                <picture>
                    <img src={props.pictureUrl} alt=""/>
                </picture>
                <p>{props.title}</p>
                <p>${props.price}</p>
            </Link>
            <ItemCount stock={props.stock} initial={0}/>
        </div>
    )
}
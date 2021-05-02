import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = (props) => {
    return(
        <div className="Item">
            <picture>
                <img src={props.pictureUrl} alt=""/>
            </picture>
            <p>{props.title}</p>
            <p>${props.price}</p>
            <ItemCount stock={5} initial={0}/>
        </div>
    )
}
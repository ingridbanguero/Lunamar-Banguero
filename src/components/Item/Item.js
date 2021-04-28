import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount';

export const Item = (props) => {
    const product = {
        id: 1,
        title: 'Vela de vainilla',
        price: 18000,
        pictureUrl: 'https://i.imgur.com/76mfoLm.jpg'
    }
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
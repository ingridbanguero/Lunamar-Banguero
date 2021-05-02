import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = (props) => {
    const item = props.item;
    return(
        <div className="ItemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    )
}
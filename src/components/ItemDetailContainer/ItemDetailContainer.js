
import './ItemDetailContainer.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = (props) => {
    const product = props

    return(
        <div className="ItemDetailContainer">
            <ItemDetail item={product}/>
        </div>
    )
}
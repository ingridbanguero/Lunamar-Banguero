import './ItemListContainer.css';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = (props) => {
    const products = props.products;
    return(
        <div className="ItemListContainer">
            <ItemList products={products}/>
        </div>
    )
}
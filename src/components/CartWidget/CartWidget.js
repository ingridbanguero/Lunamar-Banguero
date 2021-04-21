import cart from '../../assets/cart.svg';
import './CartWidget.css';

export const CartWidget = () => {
    return(
        <picture className="cartWidget">
            <img src={cart} alt="Carrito"/>
            <i>1</i>
        </picture>
    )
}
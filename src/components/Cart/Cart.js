import './Cart.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../Context/cartContext';

export const Cart = () => {
    const { cart, price, clearCart, removeFromCart} = useContext(CartContext);
    

    if(cart.length === 0){
        return(
            <div className="Cart">
                <div className="CartError">
                    <h3>No hay productos en el carrito</h3>
                    <p>Antes de proceder al pago, debe agregar productos a su carrito de compras.<br></br> Lo invitamos a continuar navegando en nuestra página web</p>
                    <Link to="/">
                        <button>SEGUIR COMPRANDO</button>
                    </Link>
                </div>
            </div>
        )
    }else{
        return(
            <div className="Cart">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {cart.map((product) => <tr><td><img src={product.item.pictureUrl} alt="" /></td><td><p>{product.item.title}</p></td><td><p>${product.item.price}</p></td><td><p>{product.quantity}</p></td><td><p>${product.quantity*product.item.price}</p></td><td><button onClick={() => removeFromCart(product.item.id)}>Eliminar</button></td></tr>)}
                        <tr><td colSpan="6" class="ClearCart"><button onClick={clearCart}>Vaciar carrito</button></td></tr>
                    </tbody>
                </table>
                <div>
                    <p>Total en carrito: ${price}</p>
                </div>
            </div>
        )
        
    }
}
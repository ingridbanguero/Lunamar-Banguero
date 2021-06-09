import './Cart.css';
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../Context/cartContext';
import { getFirestore } from '../../firebase';
import firebase from 'firebase';

export const Cart = () => {
    const { cart, price, clearCart, removeFromCart} = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        mail: ''
    })
    const [order, setOrder] = useState('');
    
    const handleInputChange = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        })
    }
    const sendOrder = (event) => {
        event.preventDefault();
        const db = getFirestore();
        const batch = db.batch();

        const ordersCollection = db.collection("orders");

        const items = cart.map(function(element){
            return {
                id: element.item.id,
                title: element.item.title,
                price: element.item.price
            }
        })

        const newOrder = {
            buyer: buyer,
            items:  items,
            total : price,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }
        ordersCollection.add(newOrder).then(({id}) => {
            setOrder(id);
            clearCart();
        })

        cart.forEach((product) => {
            const productRef = db.collection('items').doc(product.item.id);
            batch.update(productRef, {stock: product.item.stock - product.quantity})
        })
        batch.commit();
    };

    if(cart.length === 0){
        if(order){
            return(
                <div className="Cart">
                    <div className="CartError">
                        <h3>Gracias por tu pedido</h3>
                        <p>Se ha creado exitosamente su orden El ID es {order}<br></br> Lo invitamos a continuar navegando en nuestra página web</p>
                        <Link to="/">
                            <button>SEGUIR COMPRANDO</button>
                        </Link>
                    </div>
                </div>
            )
        }else{
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
        }
        
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
                        <tr><td colSpan="6" className="ClearCart"><button onClick={clearCart}>Vaciar carrito</button></td></tr>
                    </tbody>
                </table>
                <div>
                    <p>Total en carrito: ${price}</p>
                </div>
                <div className="Form">
                    <p>Información de contacto</p>
                    <form onSubmit={sendOrder}>
                        <label>
                            Name:
                            <input type="text" name="name" onChange={handleInputChange}/>
                        </label>
                        <label>
                            Teléfono:
                            <input type="number" name="phone" onChange={handleInputChange}/>
                        </label>
                        <label>
                            Correo:
                            <input type="email" name="mail" onChange={handleInputChange}/>
                        </label>
                        <button type="submit">Enviar pedido</button>
                    </form>
                </div>
            </div>
        )
        
    }
}
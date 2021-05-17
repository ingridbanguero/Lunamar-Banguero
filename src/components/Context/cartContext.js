import {createContext, useState, useEffect} from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]) // Items del carrito
    const [quantity, setQuantity] = useState(0); // Cantidad de los items

    const addToCart = (item, quantity) => {
        const newItem = {item, quantity}
        setCart([...cart, newItem])
    }
    
    const removeFromCart = (itemId) => {
        const newCart = cart.filter(element => element.item.id !== itemId);
        setCart(newCart);
    }
    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        const duplicated = cart.find(element => element.item.id === itemId)
        if(duplicated){
            alert('El carrito ya cuenta con este elemento');
            return false;
        }else{
            return true;
        }
    }

    useEffect(() => {
        setQuantity(0);
        cart.forEach(element => setQuantity(q => q + element.quantity));
        console.log(cart);
    }, [cart])

    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, isInCart, clearCart, quantity}}>
            {children}
        </CartContext.Provider>
    )
}
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);
    
    const addToCart = (prod, qty) => {
        if (cart.some(el => el.id === prod.id)) {
            
            let index = cart.findIndex(el => el.id === prod.id);
            let product = cart[index];
            product.qty = product.qty + qty;
            // prod.stock = prod.stock - qty;

            const newCart = [...cart];
            newCart.splice(index, 1, product);

            setCart([...newCart])

        }else{
            let product = {...prod, qty};
            setCart([...cart, product]);
            // prod.stock = prod.stock - product.qty;        
        }
    }
    const deleteCartById = ( id ) => {
        const newCart = [...cart];
        let index = newCart.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setCart([...newCart]);
    }

    const deleteCart = () => {
        setCart([]);
    }

    const totalCart = () => {
        return cart.reduce((total, item) =>{
            return total + item.precio * item.qty
        }, 0);
    }


    return(
        <CartContext.Provider value ={{cart, setCart, addToCart, deleteCartById, deleteCart, totalCart}} >

            {children}

        </CartContext.Provider>
    )

}

export default CartProvider;
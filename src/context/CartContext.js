import { createContext, useState } from "react";
import ItemCount from "../componentes/ItemCount/ItemCount";

export const CartContext = createContext();

const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);
    
    const addToCart = (prod, qty) => {
        if (cart.some(el => el.id === prod.id)) {
            
            let index = cart.findIndex(el => el.id === prod.id);
            let product = cart[index];
            product.qty = product.qty + qty;

            const newCart = [...cart];
            newCart.splice(index, 1, product);

            setCart([...newCart])
        
        }else{
            let product = {...prod, qty};
            setCart([...cart, product]);
        }
    }
    console.log(cart);
    const deleteCartById = ( id ) => {
        const newCart = [...cart];
        let index = newCart.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setCart([...newCart]);
    }

    const deleteCart = () => {
        setCart([]);
    }

    return(
        <CartContext.Provider value ={{cart, setCart, addToCart, deleteCartById, deleteCart}} >

            {children}

        </CartContext.Provider>
    )

}

export default CartProvider;
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ( {children} ) => {

  const [cart, setCart] = useState([]);

  const setAndStore = (products) => {
    setCart(products);
    localStorage.setItem("cart", JSON.stringify(products));
  };
  
  const addToCart = (prod, qty) => {
    if (cart.some(el => el.id === prod.id)) {
      let index = cart.findIndex(el => el.id === prod.id);
      let product = cart[index];
      product.qty = product.qty + qty;
      const newCart = [...cart];
      newCart.splice(index, 1, product);
      setAndStore([...newCart])

    }else{
      let product = {...prod, qty};
      setAndStore([...cart, product]);    
    }
  }

  const deleteCartById = ( id ) => {
    const newCart = [...cart];
    let index = newCart.findIndex(el => el.id === id);
    newCart.splice( index, 1 );
    setAndStore([...newCart]);
  }

  const deleteCart = () => {
    setAndStore([]);
  }

  const totalCart = () => {
    return cart.reduce((total, item) =>{
      return total + item.precio * item.qty
    }, 0);
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    setCart(cart);
  }, [])
  

  return(
    <CartContext.Provider value ={{cart, addToCart, deleteCartById, deleteCart, totalCart}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
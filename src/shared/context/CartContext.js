import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      // Produto já existe no carrinho, atualiza a quantidade
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1; // Incrementa a quantidade em 1
      setCart(updatedCart);
    } else {
      // Produto não existe no carrinho, adiciona com quantidade 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        const newQuantity = Math.max(0, product.quantity - 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    console.log(updatedCart);
    // Remove o produto se a quantidade for maior que 1, caso contrário, mantém no carrinho
    setCart(updatedCart.filter((product) => !(product.id === productId && product.quantity === 0 )));
  };

  const getCartTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

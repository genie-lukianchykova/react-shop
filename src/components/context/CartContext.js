import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

   useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id);
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const getTotal = () => {
    return cart
      .reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  const toggleCart = () => setCartOpen(prev => !prev);
  const closeCart = () => setCartOpen(false);

  return (
    <CartContext.Provider value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        getTotal, 
        cartOpen, 
        toggleCart, 
        closeCart,
        increaseQuantity,
        decreaseQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
}
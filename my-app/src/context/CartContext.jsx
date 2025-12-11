import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (dish) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.dish._id === dish._id);
      if (existing) {
        return prev.map((i) =>
          i.dish._id === dish._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { dish, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((i) => i.dish._id !== id));
  };

  const clearCart = () => setItems([]);

  const updateQty = (id, qty) => {
    setItems((prev) =>
      prev.map((i) =>
        i.dish._id === id ? { ...i, qty: Math.max(1, qty) } : i
      )
    );
  };

  const total = items.reduce((sum, i) => sum + i.dish.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart, updateQty, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

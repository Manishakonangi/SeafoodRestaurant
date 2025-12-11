// src/pages/CartPage.jsx
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { items, total, updateQty, removeFromCart, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const checkout = () => {
    if (!user) {
      alert("Please login to place order");
      navigate("/login");
      return;
    }

    alert("Order placed successfully! 🎉");
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="page">
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Your Order</h2>

      {items.map((item) => (
        <div key={item.dish._id} className="cart-row">
          {/* Dish Name */}
          <span>{item.dish.name}</span>

          {/* Price */}
          <span>₹{item.dish.price}</span>

          {/* Quantity Input */}
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              updateQty(item.dish._id, parseInt(e.target.value || 1))
            }
          />

          {/* Subtotal */}
          <span>₹{item.dish.price * item.qty}</span>

          {/* Remove Button */}
          <button onClick={() => removeFromCart(item.dish._id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button onClick={checkout} style={{ marginTop: "20px" }}>
        Place Order
      </button>
    </div>
  );
}

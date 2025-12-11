import { useCart } from "../context/CartContext";

export default function DishCard({ dish }) {
  const { addToCart } = useCart();

  return (
    <div className="dish-card">
      {dish.image && <img src={dish.image} alt={dish.name} />}
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <p><strong>₹{dish.price}</strong></p>
      <p>Spice: {dish.spiceLevel}/5</p>
      <button onClick={() => addToCart(dish)}>Add to Cart</button>
    </div>
  );
}

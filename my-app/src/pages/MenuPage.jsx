// src/pages/MenuPage.jsx
import { useCart } from "../context/CartContext";

export default function MenuPage() {
  const { addToCart } = useCart();

  // 20 dishes with _id (required for cart)
  const dishes = [
    {
      _id: "1",
      name: "Grilled Fish",
      price: 250,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947",
      category: "Fish"
    },
    {
      _id: "2",
      name: "Crab Curry",
      price: 320,
      image: "https://images.unsplash.com/photo-1612198791373-56d2e0a7f12a",
      category: "Crab"
    },
    {
      _id: "3",
      name: "Prawns Fry",
      price: 220,
      image: "https://images.unsplash.com/photo-1637071667630-76c6714d7b5e",
      category: "Prawns"
    },
    {
      _id: "4",
      name: "Lobster Roast",
      price: 480,
      image: "https://images.unsplash.com/photo-1553621043-f5e06dd92f95",
      category: "Lobster"
    },
    {
      _id: "5",
      name: "Fish Curry Meal",
      price: 180,
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      category: "Fish"
    },
    {
      _id: "6",
      name: "Butter Garlic Prawns",
      price: 260,
      image: "https://images.unsplash.com/photo-1604908554266-c993e8f64574",
      category: "Prawns"
    },
    {
      _id: "7",
      name: "Tandoori Fish",
      price: 240,
      image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
      category: "Fish"
    },
    {
      _id: "8",
      name: "Crab Masala",
      price: 290,
      image: "https://images.unsplash.com/photo-1588167056540-e1d7c5341dfb",
      category: "Crab"
    },
    {
      _id: "9",
      name: "Fish Biryani",
      price: 260,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710",
      category: "Fish"
    },
    {
      _id: "10",
      name: "Squid Fry",
      price: 230,
      image: "https://images.unsplash.com/photo-1625940334634-784c7d0e6d70",
      category: "Squid"
    },
    {
      _id: "11",
      name: "Crab Soup",
      price: 200,
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975",
      category: "Crab"
    },
    {
      _id: "12",
      name: "Kerala Fish Fry",
      price: 210,
      image: "https://images.unsplash.com/photo-1568158879083-c1d3d73ff34a",
      category: "Fish"
    },
    {
      _id: "13",
      name: "Tandoori Prawns",
      price: 280,
      image: "https://images.unsplash.com/photo-1582457274181-66eb0f1a20d5",
      category: "Prawns"
    },
    {
      _id: "14",
      name: "Seafood Platter",
      price: 550,
      image: "https://images.unsplash.com/photo-1612197534088-5e1efc9c35e5",
      category: "Mix"
    },
    {
      _id: "15",
      name: "Fish Cutlets",
      price: 190,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      category: "Fish"
    },
    {
      _id: "16",
      name: "Shrimp Pasta",
      price: 320,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      category: "Prawns"
    },
    {
      _id: "17",
      name: "Fried Calamari",
      price: 260,
      image: "https://images.unsplash.com/photo-1626082927389-ccd44fcbb40f",
      category: "Squid"
    },
    {
      _id: "18",
      name: "Fish Tacos",
      price: 200,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      category: "Fish"
    },
    {
      _id: "19",
      name: "Crab Noodles",
      price: 300,
      image: "https://images.unsplash.com/photo-1612198736768-a675c2626752",
      category: "Crab"
    },
    {
      _id: "20",
      name: "Garlic Butter Lobster",
      price: 520,
      image: "https://images.unsplash.com/photo-1553621040-0c7c9c25e0e3",
      category: "Lobster"
    }
  ];

  return (
    <div className="page">
      <h1>Our Seafood Menu 🐟</h1>
      <p>Freshly cooked coastal dishes — 100% authentic taste!</p>

      {/* Menu Grid */}
      <div className="grid">
        {dishes.map((dish) => (
          <div className="dish-card" key={dish._id}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p><strong>Category:</strong> {dish.category}</p>
            <p><strong>Price:</strong> ₹{dish.price}</p>

            {/* Add to cart */}
            <button onClick={() => addToCart(dish)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* List of dish names */}
      <h2 className="mt-20">All Dish Names</h2>
      <ul className="dish-name-list">
        {dishes.map((dish) => (
          <li key={dish._id}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}

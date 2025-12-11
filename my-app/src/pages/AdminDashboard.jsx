import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [dishes, setDishes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [newDish, setNewDish] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    spiceLevel: 0,
    image: ""
  });

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }
    const loadData = async () => {
      const d = await api.get("/dishes");
      const o = await api.get("/orders");
      const r = await api.get("/reservations");
      setDishes(d.data);
      setOrders(o.data);
      setReservations(r.data);
    };
    loadData();
  }, [user, navigate]);

  const changeDishHandler = (e) => {
    setNewDish({ ...newDish, [e.target.name]: e.target.value });
  };

  const addDish = async (e) => {
    e.preventDefault();
    const res = await api.post("/dishes", {
      ...newDish,
      price: Number(newDish.price),
      spiceLevel: Number(newDish.spiceLevel)
    });
    setDishes((prev) => [...prev, res.data]);
    setNewDish({
      name: "",
      category: "",
      description: "",
      price: "",
      spiceLevel: 0,
      image: ""
    });
  };

  const updateOrderStatus = async (id, status) => {
    const res = await api.put(`/orders/${id}`, { status });
    setOrders((prev) => prev.map((o) => (o._id === id ? res.data : o)));
  };

  return (
    <div className="page">
      <h2>Admin Dashboard</h2>

      <section>
        <h3>Add New Dish</h3>
        <form className="form" onSubmit={addDish}>
          <input
            name="name"
            placeholder="Name"
            value={newDish.name}
            onChange={changeDishHandler}
            required
          />
          <input
            name="category"
            placeholder="Category (Fish, Crab, Prawn...)"
            value={newDish.category}
            onChange={changeDishHandler}
            required
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={newDish.price}
            onChange={changeDishHandler}
            required
          />
          <input
            name="spiceLevel"
            type="number"
            min={0}
            max={5}
            placeholder="Spice level"
            value={newDish.spiceLevel}
            onChange={changeDishHandler}
          />
          <input
            name="image"
            placeholder="Image URL"
            value={newDish.image}
            onChange={changeDishHandler}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newDish.description}
            onChange={changeDishHandler}
          />
          <button type="submit">Add Dish</button>
        </form>
      </section>

      <section>
        <h3>Orders</h3>
        {orders.map((o) => (
          <div key={o._id} className="card">
            <p>
              <strong>Order ID:</strong> {o._id}
            </p>
            <p>
              Customer: {o.user?.name} ({o.user?.email})
            </p>
            <ul>
              {o.items.map((it) => (
                <li key={it._id}>
                  {it.dish?.name} x {it.qty}
                </li>
              ))}
            </ul>
            <p>Total: ₹{o.totalAmount}</p>
            <p>Status: {o.status}</p>
            <select
              value={o.status}
              onChange={(e) => updateOrderStatus(o._id, e.target.value)}
            >
              <option>Pending</option>
              <option>Preparing</option>
              <option>Ready</option>
              <option>Delivered</option>
            </select>
          </div>
        ))}
      </section>

      <section>
        <h3>Reservations</h3>
        {reservations.map((r) => (
          <div key={r._id} className="card">
            <p>{r.name} - {r.phone}</p>
            <p>
              {r.date} at {r.time} for {r.people} people
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

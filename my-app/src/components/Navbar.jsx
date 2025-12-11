import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <nav className="nav">
      <h2 className="logo">SeaWave Seafood</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservation">Reservation</Link>

        {/* ⭐ NEW PARTIES LINK */}
        <Link to="/parties">Parties</Link>

        <Link to="/cart">Cart ({items.length})</Link>

        {user?.role === "admin" && <Link to="/admin">Admin</Link>}

        {user ? (
          <>
            <span className="nav-user">Hi, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

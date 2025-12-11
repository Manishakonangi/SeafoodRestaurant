import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import ReservationPage from "./pages/ReservationPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Parties from "./pages/Parties";   // ⭐ ADD THIS IMPORT

import "./index.css";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* ⭐ PARTIES ROUTE */}
            <Route path="/parties" element={<Parties />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

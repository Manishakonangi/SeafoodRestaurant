// src/pages/Register.jsx
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      alert("Registration successful! Please login.");
      navigate("/login"); // 👉 Redirect to login page
    } catch (err) {
      alert("Registration failed");
    }
  };

 return (
  <div className="auth-center-page">
    <div className="auth-box">
      <h2 className="title">Create an Account</h2>

      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "10px" }}>
        Already have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login Here
        </span>
      </p>
    </div>
  </div>
);
}
import { useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);
      login(res.data.user);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-center-page">
      <div className="auth-box">
        <h2 className="title">Login</h2>

        <form className="form" onSubmit={submitHandler}>
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

          <button type="submit">Login</button>
        </form>

        <p style={{ marginTop: "10px" }}>
          New user?{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Create an Account
          </span>
        </p>
      </div>
    </div>
  );
}

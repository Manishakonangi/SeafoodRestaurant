import { useState } from "react";
import api from "../api";

export default function ReservationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    people: 2
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await api.post("/reservations", form);
      alert("Reservation submitted!");
      setForm({ name: "", phone: "", date: "", time: "", people: 2 });
    } catch {
      alert("Failed to make reservation");
    }
  };

  return (
    <div className="page">
      <h2>Reserve a Table</h2>
      <form className="form" onSubmit={submitHandler}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={changeHandler}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={changeHandler}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={changeHandler}
          required
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={changeHandler}
          required
        />
        <input
          type="number"
          name="people"
          min={1}
          value={form.people}
          onChange={changeHandler}
          required
        />
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

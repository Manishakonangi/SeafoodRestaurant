import { useState } from "react";

export default function Parties() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
    console.log(form);
  };

  return (
    <div className="party-page">

      <h1>Party Booking 🎉</h1>

      <form className="party-form" onSubmit={submitHandler}>
        
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
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <select
          name="eventType"
          value={form.eventType}
          onChange={handleChange}
          required
        >
          <option value="">Select Event Type</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Family Celebration">Family Celebration</option>
          <option value="Engagement">Engagement</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Team Outing">Team Outing</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="guests"
          placeholder="No. of Guests"
          value={form.guests}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Any special requests?"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
}

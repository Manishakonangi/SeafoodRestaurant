import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  guests: Number,
  date: String,
  time: String
});

export default mongoose.model("Reservation", reservationSchema);

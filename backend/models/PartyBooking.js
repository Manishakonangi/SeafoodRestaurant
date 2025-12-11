import mongoose from "mongoose";

const partySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    eventType: String,
    date: String,
    guests: Number,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model("PartyBooking", partySchema);

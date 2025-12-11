import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [
    {
      dish: { type: mongoose.Schema.Types.ObjectId, ref: "Dish" },
      qty: Number
    }
  ],
  totalAmount: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);

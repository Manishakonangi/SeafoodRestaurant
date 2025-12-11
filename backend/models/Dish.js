import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String
});

export default mongoose.model("Dish", dishSchema);

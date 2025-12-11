import Dish from "../models/Dish.js";

// GET all dishes
export const getDishes = async (req, res) => {
  const dishes = await Dish.find();
  res.send(dishes);   // 👉 replaced res.json()
};

// ADD a new dish
export const addDish = async (req, res) => {
  const dish = await Dish.create(req.body);
  res.send(dish);     // 👉 replaced res.json()
};

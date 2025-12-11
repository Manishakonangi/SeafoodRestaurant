import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.send(order);   // ✔ replaced res.json
};

export const getOrders = async (req, res) => {
  const orders = await Order.find().populate("items.dish");
  res.send(orders);  // ✔ replaced res.json
};

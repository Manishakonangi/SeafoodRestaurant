import Reservation from "../models/Reservation.js";

export const createReservation = async (req, res) => {
  const reservation = await Reservation.create(req.body);
  res.send(reservation);   // ✔ replaced res.json()
};

export const getReservation = async (req, res) => {
  const reservations = await Reservation.find();
  res.send(reservations);  // ✔ replaced res.json()
};

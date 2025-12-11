import PartyBooking from "../models/PartyBooking.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const booking = await PartyBooking.create(req.body);
    res.send({ success: true, booking });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

// GET ALL BOOKINGS (for admin)
export const getBookings = async (req, res) => {
  const bookings = await PartyBooking.find();
  res.send(bookings);
};

import express from "express";
import { createBooking, getBookings } from "../controllers/partyController.js";

const router = express.Router();

router.post("/", createBooking);    // Save booking
router.get("/", getBookings);       // Admin sees all

export default router;

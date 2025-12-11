import express from "express";
import { createReservation, getReservation } from "../controllers/reservationController.js";

const router = express.Router();

router.post("/", createReservation);
router.get("/", getReservation);

export default router;

import express from "express";
import { addDish, getDishes } from "../controllers/dishController.js";

const router = express.Router();

router.get("/", getDishes);
router.post("/", addDish); // admin only (optional middleware)

export default router;

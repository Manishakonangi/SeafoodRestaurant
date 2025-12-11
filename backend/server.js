import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import dishRoutes from "./routes/dishRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import partyRoutes from "./routes/partyRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reservation", reservationRoutes);
app.use("/api/parties", partyRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

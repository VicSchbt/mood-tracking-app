import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import { requestLogger } from "./middleware/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🎉");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

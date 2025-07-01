import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🎉");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

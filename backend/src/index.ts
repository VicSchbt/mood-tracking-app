import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import { requestLogger } from "./middleware/logger";
import logsRoutes from "./routes/logs";
import quotesRoutes from "./routes/quotes";
import userRoutes from "./routes/user";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use("/auth", authRoutes);
app.use("/logs", logsRoutes);
app.use("/quotes", quotesRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🎉");
});

app.use(errorHandler);

app.router.stack.forEach((middleware: any) => {
  if (middleware.route) {
    console.log("[ROUTE]", middleware.route.path);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

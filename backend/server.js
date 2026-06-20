const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load Environment Variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

// Task Routes
app.use(
  "/tasks",
  require("./routes/taskRoutes")
);

// Authentication Routes
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

// Server Port
const PORT =
  process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});
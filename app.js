const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Use ENV variable for Mongo URL
const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/devopsdb";

mongoose
  .connect(mongoURL)
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch((err) => console.log("MongoDB connection error ❌", err));

app.get("/", (req, res) => {
  res.send("Hello from Docker + DevOps + Mongo 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
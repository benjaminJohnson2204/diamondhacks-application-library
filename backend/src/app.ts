import "dotenv/config";
import "module-alias/register";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN
  })
);

// Add API routes here

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI as string)
  .then(() => {
    console.log("Mongoose connected!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  })
  .catch(console.error);

module.exports = app;

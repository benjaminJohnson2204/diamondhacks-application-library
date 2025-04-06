import "dotenv/config";
import "module-alias/register";

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import BookModel from "./models/book";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN
  })
);

// Add API routes here
app.get("/api/book", async (req, res) => {
  const books = await BookModel.find();
  res.status(200).json(books);
});

app.post("/api/book", async (req, res) => {
  const { title, description, author } = req.body;
  if (!title || !description || !author) {
    res.status(400).json("Please supply all required field");
    return;
  }

  const book = await BookModel.create({
    title,
    description,
    author
  });

  res.status(201).json(book);
});

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

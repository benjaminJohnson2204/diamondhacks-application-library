import { InferSchemaType, Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

export type Book = InferSchemaType<typeof bookSchema>;

export default model<Book>("Book", bookSchema);

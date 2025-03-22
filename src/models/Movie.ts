import { Schema, model } from "mongoose";

const MovieSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  actors: [String],
  plot: String,
});

export const Movie = model("Movie", MovieSchema);

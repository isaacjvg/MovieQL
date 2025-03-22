import { Schema, model } from "mongoose";

const SeriesSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  seasons: { type: Number, required: true },
  episodes: { type: Number, required: true },
  director: { type: String, required: true },
  actors: [String],
  plot: String,
});

export const Series = model("Series", SeriesSchema);

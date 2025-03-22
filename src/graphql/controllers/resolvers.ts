import { GraphQLError } from "graphql";
import { Movie } from "../../models/Movie";
import { Series } from "../../models/Series";

const findAndHandleNotFound = async (model: any, id: string, name: string) => {
  const document = await model.findById(id);
  if (!document) {
    throw new GraphQLError(`${name} with id ${id} not found`);
  }
  return document;
};

const Query = {
  getMovies: async () => {
    const movies = await Movie.find();
    if (movies.length === 0) {
      throw new GraphQLError("No movies found");
    }
    return movies;
  },

  getSeries: async () => {
    const series = await Series.find();
    if (series.length === 0) {
      throw new GraphQLError("No series found");
    }
    return series;
  },

  getMovie: async (_: any, { id }: { id: string }) => {
    return await findAndHandleNotFound(Movie, id, "Movie");
  },

  getSerie: async (_: any, { id }: { id: string }) => {
    return await findAndHandleNotFound(Series, id, "Serie");
  },
};

const Mutation = {
  addMovie: async (
    _: any,
    { title, year, genre, director }: { title: string; year: number; genre: string; director: string }
  ) => {
    const newMovie = new Movie({ title, year, genre, director });
    await newMovie.save();
    return newMovie;
  },

  deleteMovie: async (_: any, { id }: { id: string }) => {
    await findAndHandleNotFound(Movie, id, "Movie");
    await Movie.deleteOne({ _id: id });
    return `Movie with id ${id} deleted successfully`;
  },

  addSerie: async (
    _: any,
    {
      title,
      year,
      genre,
      seasons,
      episodes,
      director,
    }: {
      title: string;
      year: number;
      genre: string;
      seasons: number;
      episodes: number;
      director: string;
    }
  ) => {
    const newSerie = new Series({
      title,
      year,
      genre,
      seasons,
      episodes,
      director,
    });
    await newSerie.save();
    return newSerie;
  },

  deleteSerie: async (_: any, { id }: { id: string }) => {
    await findAndHandleNotFound(Series, id, "Serie");
    await Series.deleteOne({ _id: id });
    return `Serie with id ${id} deleted successfully`;
  },
};

export default {
  Query,
  Mutation,
};
import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    year: Int!
    genre: String!
    director: String!
    actors: [String]
    plot: String
  }

  type Series {
    id: ID!
    title: String!
    year: Int!
    genre: String!
    seasons: Int!
    episodes: Int!
    director: String!
    actors: [String]
    plot: String
  }

  type Query {
    getMovies: [Movie]
    getSeries: [Series]
    getMovie(id: ID!): Movie
    getSerie(id: ID!): Series
  }

  type Mutation {
    addMovie(
      title: String!
      year: Int!
      genre: String!
      director: String
    ): Movie

    deleteMovie(id: ID!): String

    addSerie(
      title: String!
      year: Int!
      genre: String!
      seasons: Int!
      episodes: Int!
      director: String
    ): Series

    deleteSerie(id: ID!): String
  }
`;

export default typeDefs;

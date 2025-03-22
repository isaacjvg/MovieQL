# MovieQL

This is a simple GraphQL API for managing movies and series.

## Setup

1. Clone the repository.
2. Run `bun install` to install dependencies.
3. Set up your MongoDB connection by adding your Mongo URI to the `.env` file.
4. Start the server with `bun start`.

## GraphQL Endpoints

- `GET /movies` - Retrieve all movies.
- `GET /movies/:id` - Retrieve a movie by ID.
- `POST /movies` - Add a new movie.
- `DELETE /movies/:id` - Delete a movie by ID.

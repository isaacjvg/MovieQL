import { createSchema } from "graphql-yoga";
import resolvers from "./controllers/resolvers";  
import typeDefs from "./controllers/typeDefs";

export const schema = createSchema({
  typeDefs,
  resolvers
});

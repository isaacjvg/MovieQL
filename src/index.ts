import "dotenv/config";
import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/index";
import { serve } from "bun";

import "./config/db";

const yoga = createYoga({ schema });

serve({
  fetch: (req: Request) => yoga.fetch(req),
  routes: {
    "/api/status": new Response("OK"),
    "/api/graphql": yoga.fetch,
  },
  port: 5000,
});

console.log("Server running on port 5000");

process.on("SIGINT", () => {
  console.log("Shutting down the server gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("Server terminated...");
  process.exit(0);
});

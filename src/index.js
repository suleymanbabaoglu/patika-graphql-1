import { createServer } from "@graphql-yoga/node";
import resolvers from "@resolvers";
import typeDefs from "@type-defs";
import data from "./data";

import { makeExecutableSchema } from "@graphql-tools/schema";
const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
const server = createServer({
  schema,
  context: {
    data,
  },
});
server.start();

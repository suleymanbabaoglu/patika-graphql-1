const { createServer } = require("@graphql-yoga/node");
const pubSub = require("./redis");
const { typeDefs, resolvers } = require("./resolver");

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
    context: {
      pubSub,
    },
  },
});
server.start();

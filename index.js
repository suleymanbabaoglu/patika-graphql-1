const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./resolver");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});
const port=7889;
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

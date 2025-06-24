const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("../graphql/schema.js");
const resolvers = require("../graphql/resolver.js");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server,{
    listen: { port: 4000 } ,
  })
  console.log(`server ready at : ${url}`);
}


startServer();

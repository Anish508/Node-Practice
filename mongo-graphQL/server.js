const env = require('dotenv').config()
const connectDB = require('./src/database/db.js')
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./src/graphql/schema.js");
const resolvers = require("./src/graphql/resolver.js");

async function startServer() {
  await connectDB()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server,{
    listen: { port: process.env.PORT} ,
  })
  console.log(`server ready at : ${url}`);
}


startServer();

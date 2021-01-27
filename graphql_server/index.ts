import { ApolloServer } from "apollo-server"

import typeDefs from "./graphql/typeDefs"
import resolvers from "./graphql/resolvers"

const server = new ApolloServer({ typeDefs, resolvers })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})

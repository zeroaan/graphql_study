import { ApolloClient, InMemoryCache } from "@apollo/client"

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache: cache,
  uri: "https://movieql.now.sh/",
})

export default client

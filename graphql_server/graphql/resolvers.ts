import { getMovies, getById, addMovie } from "./db"

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { title, rating }) => addMovie(title, rating),
  },
}

export default resolvers

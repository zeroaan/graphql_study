import { getMovies, getMovie, getSuggestions } from "./db"

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
}

export default resolvers

/*
import { getMovies, getById, addMovie, deleteMovie } from "./db"

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { title, rating }) => addMovie(title, rating),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
}

export default resolvers
*/

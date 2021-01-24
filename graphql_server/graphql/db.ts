let movies = [
  {
    id: 0,
    title: "Home alone",
    rating: 4.5,
  },
  {
    id: 1,
    title: "Avengers",
    rating: 4.7,
  },
  {
    id: 2,
    title: "Spider man",
    rating: 4.4,
  },
  {
    id: 3,
    title: "Logan",
    rating: 4.1,
  },
]

export const getMovies = () => movies

export const getById = (id: number) => {
  const filteredMovies = movies.filter((movie) => movie.id === id)
  return filteredMovies[0]
}

export const deleteMovie = (id: number) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}

export const addMovie = (title: string, rating: number) => {
  const newMovie = {
    id: Number(`${movies[movies.length - 1].id + 1}`),
    title,
    rating,
  }
  movies.push(newMovie)
  return newMovie
}

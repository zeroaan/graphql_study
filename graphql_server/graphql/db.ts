import fetch from "node-fetch"

const API_URL = "https://yts.mx/api/v2/list_movies.json?"

export const getMovies = (limit, rating) => {
  let REQUEST_URL = API_URL
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`
  }
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies)
}

/*
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
*/

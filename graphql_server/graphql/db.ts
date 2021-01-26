import axios from "axios"

const BASE_URL = "https://yts.mx/api/v2/"
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json?`
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json?`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`

export const getMovies = async (limit: number, rating: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  })
  return movies
}

export const getMovie = async (id: number) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  })
  return movie
}

export const getSuggestions = async (id: number) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  })
  return movies
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

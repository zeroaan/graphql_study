import React from "react"
import { gql, useQuery } from "@apollo/client"

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES)
  console.log(loading, error, data)

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data.movies.map((v: { id: number; medium_cover_image: string }) => (
            <h1 key={v.id}>{v.id}</h1>
          ))}
        </>
      )}
    </>
  )
}

export default Home

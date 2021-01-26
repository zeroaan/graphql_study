import React from "react"
import { useParams } from "react-router-dom"
import { gql, useQuery } from "@apollo/client"

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`

const Detail = () => {
  const params = useParams<{ id: string }>()
  const id = Number(params.id)
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  })
  console.log(loading, data)

  return (
    <>
      <div>Detail</div>
    </>
  )
}

export default Detail

import React from "react"
import { gql, useQuery } from "@apollo/client"
import styled from "styled-components"

import Movie from "components/Movie"

const GET_MOVIES = gql`
  query getMovies($limit: Int, $rating: Float) {
    movies(limit: $limit, rating: $rating) {
      id
      medium_cover_image
      title
      rating
      isLiked @client
    }
  }
`

interface IMovie {
  id: number
  medium_cover_image: string
  title: string
  rating: number
  isLiked: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`

const Subtitle = styled.h3`
  font-size: 35px;
`

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { limit: 40, rating: 8.5 },
  })
  return (
    <Container>
      <Header>
        <Title>Movie App 2021</Title>
        <Subtitle>Apollo & GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {data?.movies?.map((v: IMovie) => (
          <Movie key={v.id} id={v.id} isLiked={v.isLiked} bg={v.medium_cover_image} title={v.title} rating={v.rating} />
        ))}
      </Movies>
    </Container>
  )
}

export default Home

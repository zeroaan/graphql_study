import React from "react"
import { gql, useMutation } from "@apollo/client"
import { Link } from "react-router-dom"
import styled from "styled-components"

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`

interface Props {
  id: number
  bg: string
  title: string
  rating: number
  isLiked: boolean
}

const PosterHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 7px;
  transition: all 0.3s ease;
  opacity: 0;
`

const Container = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
  &:hover ${PosterHover} {
    opacity: 1;
  }
`

const LinkStyled = styled(Link)`
  position: relative;
`

const Poster = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`

const PosterDesc = styled.p`
  font-size: 20px;
  margin: 15px 0;
  width: 80%;
  text-align: center;
  letter-spacing: 1px;
  line-height: 25px;
`

const Movie = ({ id, bg, title, rating, isLiked }: Props) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id, isLiked },
  })

  return (
    <Container>
      <LinkStyled to={`/${id}`}>
        <Poster $bg={bg} />
        <PosterHover>
          <PosterDesc>{title}</PosterDesc>
          <PosterDesc>⭐{rating}</PosterDesc>
        </PosterHover>
      </LinkStyled>
      <button onClick={() => toggleLikeMovie()}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  )
}

export default Movie

import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

interface Props {
  id: number
  bg: string
}

const Container = styled.div`
  height: 300px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`

const Poster = styled.div<{ $bg: string }>`
  background-image: url(${(props) => props.$bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`

const Movie = ({ id, bg }: Props) => {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster $bg={bg} />
      </Link>
    </Container>
  )
}

export default Movie

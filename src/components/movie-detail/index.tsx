import React, { useEffect, useState } from "react"

import { Container, DetailRow, OuterContainer, Poster, PosterContainer, Rating, Title } from "./styles"
import { useParams } from "react-router-dom"
import { getMovieDetail } from "../../client"
import { MediaTransport } from "../../transports"

const DEFAULT_ID = 'tt0111161'
const sampleMovie = {
    "Title": "Guardians of the Galaxy Vol. 2",
    "Year": "2017",
    "Rated": "PG-13",
    "Released": "05 May 2017",
    "Runtime": "136 min",
    "Genre": "Action, Adventure, Comedy",
    "Director": "James Gunn",
    "Writer": "James Gunn, Dan Abnett, Andy Lanning",
    "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
    "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
    "Language": "English",
    "Country": "United States",
    "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
      },
      {
        "Source": "Metacritic",
        "Value": "67/100"
      }
    ],
    "Metascore": "67",
    "imdbRating": "7.6",
    "imdbVotes": "736,085",
    "imdbID": "tt3896198",
    "Type": "movie",
    "DVD": "10 Jul 2017",
    "BoxOffice": "$389,813,101",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
}

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieId, setMovieId] = useState<string>(id ?? DEFAULT_ID)
  const [movieData, setMovideData] = useState<MediaTransport>()

  useEffect(() => {
    getMovieDetail(movieId)
    .then((res) => {
      setMovideData(res.data)
    })
  },[movieId])

  console.log(movieData)

  return (
    <OuterContainer>
      <Container>
        <Title>{movieData?.Title}</Title>
        <div>
          <Rating>⭐ IMDB Rating:{movieData?.imdbRating}</Rating>
          {movieData?.Ratings.map((rating, index) => {
            return (
              <Rating>⭐ {rating.Source}: {rating.Value}</Rating>
            )
          })}
        </div>
        <PosterContainer>
          <Poster src={movieData?.Poster}/>
        </PosterContainer>
        <DetailRow>
          <span>Language: {movieData?.Language}</span>
          <span>Genre: {movieData?.Genre}</span>
        </DetailRow>
        <DetailRow>
          <span>Runtime: {movieData?.Runtime}</span>
          <span>Country: {movieData?.Country}</span>
        </DetailRow>
      </Container>
    </OuterContainer>
  )
}

export default MovieDetailPage
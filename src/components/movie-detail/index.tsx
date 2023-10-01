import React, { useContext, useEffect, useMemo, useState } from "react"

import { BottomContainer, Container, DetailRow, OuterContainer, Plot, PlotTitle, Poster, PosterContainer, PosterInnerContainer, Rating, Title, TopContainer } from "./styles"
import { useParams } from "react-router-dom"
import { getMovieDetail } from "../../client"
import { MediaTransport } from "../../transports"
import { FavMoviesContext } from "../../contexts/favMoviesContext"
import { FavButton } from "../movie-card/styles"
import Navbar from "../navbar"

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

const RatingContainer = ({movieData}:{movieData: MediaTransport}) => {
    return (
      <>
        <Rating>⭐ IMDB Rating:{movieData?.imdbRating}</Rating>
        {movieData.Ratings.map((rating, index) => {
          return (
            <Rating key={`rating_${index}`}>⭐ {rating.Source}: {rating.Value}</Rating>
          )
        })}
      </>
    )
}

const getRatingContainer = (movieData: MediaTransport) => {
  return (
    <RatingContainer movieData={movieData}/>
  )
}

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieId, setMovieId] = useState<string>(id ?? DEFAULT_ID)
  const [movieData, setMovideData] = useState<MediaTransport>()
  const {favMoviesIdList, setFavMoviesIdList} = useContext(FavMoviesContext)
  const isLiked = useMemo(() => movieData ? favMoviesIdList.includes(movieData?.imdbID): false ,[favMoviesIdList, movieData])
  const RatingContainer = useMemo(() => movieData ? getRatingContainer(movieData) : null,[movieData])

  useEffect(() => {
    getMovieDetail(movieId)
    .then((res) => {
      setMovideData(res.data)
    })
  },[movieId])

  const toggleFavourite = (e:any) => {
    e.stopPropagation();
    if(isLiked) {
        const newFavList:string[] = []
        favMoviesIdList.forEach((movieId) => {
            if(movieId !== movieData?.imdbID)
                newFavList.push(movieId)
        })
        setFavMoviesIdList(newFavList)
    } else {
        if(movieData)
        setFavMoviesIdList(list => [...list, movieData?.imdbID])
    }
}

  console.log(movieData)

  return (
    <OuterContainer>
      <Navbar showNavBar={false}/>
      <Container>
        <TopContainer>
          <Title>{movieData?.Title}</Title>
          {RatingContainer}
          <PosterContainer>
            <PosterInnerContainer>
              <FavButton onClick={(e) => toggleFavourite(e)}>{isLiked ? '✓' : '+'}</FavButton>
              <Poster src={movieData?.Poster}/>
            </PosterInnerContainer>
          </PosterContainer>
        </TopContainer>
        <BottomContainer>
          <DetailRow>
            <span>Language: {movieData?.Language}</span>
          </DetailRow>
          <DetailRow><span>Genre: {movieData?.Genre}</span></DetailRow>
          <DetailRow>
            <span>Runtime: {movieData?.Runtime}</span>
            <span>Country: {movieData?.Country}</span>
          </DetailRow>
          <DetailRow>Director: {movieData?.Director}</DetailRow>
          <DetailRow>Actors: {movieData?.Actors}</DetailRow>
          <DetailRow>Writer: {movieData?.Writer}</DetailRow>
          <PlotTitle>PLOT</PlotTitle>
          <Plot>{movieData?.Plot}</Plot>
          <PlotTitle>ACHEIVEMENTS</PlotTitle>
          <DetailRow>Box Office Collection: {movieData?.BoxOffice}</DetailRow>
          <DetailRow>Awards: {movieData?.Awards}</DetailRow>
        </BottomContainer>
      </Container>
    </OuterContainer>
  )
}

export default MovieDetailPage
import {FC, useState} from 'react';

import { MediaTransport } from '../../transports';
// import { useGetTopMoviesList } from './hooks';
import { Container } from './styles';
import topMovieIdsList from "../../idList.json"
import { useGetTopMoviesList } from './hooks';

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

// Movie List Page should show a list of Movie Name, Type, Year and Image.
// When a Movie is clicked, it should move to Detail Movie.


interface MovieListPageProps {
    moviesList: MediaTransport[]
}

const Mycard = ({movies}: {movies: MediaTransport[]|void}) => {
    const list = movies
    return (
        <div>
            <ul>
            {!!list && (
                list.map((movie, index) => {
                    return <li key={`movie_${index}`}>{movie.Title}</li>
                })
            )}
            </ul>
        </div>
    )
}

const MovieListPage:FC<MovieListPageProps> = () => {
    // const {topMovies} = useGetTopMoviesList();
    const topTenMoviesIdList = topMovieIdsList.slice(0,10)
    const {result} = useGetTopMoviesList(topTenMoviesIdList) 
    const [movies, setMovies] = useState<MediaTransport[]>([])
    const [pageTitle, setPageTitle] = useState<String>("TOP 10 IMDB MOVIES");

    console.log(result);

    return (
        <Container>
            <h1>{pageTitle}</h1>
            {movies?.length ? (
                <Mycard movies={movies}/>
            ) : <Mycard movies={result}/> }
            <p>Hello</p>
        </Container>
    )
}

export default MovieListPage
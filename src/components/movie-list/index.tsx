import {FC, useCallback, useEffect, useMemo, useState} from 'react';

import { MediaTransport } from '../../transports';
// import { useGetTopMoviesList } from './hooks';
import { Container, NextPageButton, PageIndex, PageTitle, PaginationBar, PrevPageButton } from './styles';
import topMovieIdsList from "../../idList.json"
import { useGetTopMoviesList } from './hooks';
import Navbar from '../navbar';
import { getMoviesSearchResult } from '../../client';
import MovieListContainer from './listContainer';

const PAGE_SIZE = 10;

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

const MovieListPage:FC<MovieListPageProps> = () => {
    // const {topMovies} = useGetTopMoviesList();
    const topTenMoviesIdList = topMovieIdsList.slice(0,10)
    const {result} = useGetTopMoviesList(topTenMoviesIdList) 
    const [movies, setMovies] = useState<MediaTransport[]>([])
    const [pageTitle, setPageTitle] = useState<string>("TOP 10 IMDB MOVIES");
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [resultSize, setResultSize] = useState<number>(0)
    const lastPageNumber = 
    useMemo(() => { return Math.ceil(resultSize/PAGE_SIZE) }, [resultSize])

    const changeSearchQuery = useCallback((newSearchQuery: string) => {
        setSearchQuery(newSearchQuery)
    },[])

    const incrementPageIndex = () => {
        setPageNumber(index => index+1)
    }
    const decerementPageIndex = () => {
        setPageNumber(index => index-1)
    }

    useEffect(() => {
        if(searchQuery) {
            getMoviesSearchResult({searchString: searchQuery, pageIndex: pageNumber})
                .then((res) => {
                    console.log(res.data)
                    if(res.data.Response === 'True') {
                        setResultSize(res.data.totalResults)
                        setPageTitle(`Showing total ${res.data.totalResults} results for ${searchQuery}`)
                        setMovies(res.data.Search)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },[searchQuery, pageNumber])

    console.log(searchQuery)
    console.log('pageNumber', pageNumber)

    return (
        <Container>
            <Navbar changeSearchQuery={changeSearchQuery}/>
            <PageTitle>{pageTitle}</PageTitle>
            {movies?.length ? (
                <MovieListContainer movies={movies}/>
            ) : <MovieListContainer movies={result}/> }
            {movies?.length && <PaginationBar>
                <PrevPageButton 
                onClick={decerementPageIndex}
                disabled={pageNumber === 0}>
                    PREV
                </PrevPageButton>
                <PageIndex>{pageNumber}</PageIndex>
                <NextPageButton
                onClick={incrementPageIndex}
                disabled={pageNumber === lastPageNumber}>
                    NEXT
                </NextPageButton>
            </PaginationBar>}
        </Container>
    )
}

export default MovieListPage
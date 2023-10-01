import {FC, useCallback, useEffect, useMemo, useState} from 'react';

import { MediaTransport } from '../../transports';
// import { useGetTopMoviesList } from './hooks';
import { Container, NextPageButton, PageIndex, PageTitle, PaginationBar, PrevPageButton } from './styles';
import topMovieIdsList from "../../idList.json"
import { useGetTopMoviesList } from './hooks';
import Navbar from '../navbar';
import { getMoviesSearchResult } from '../../client';
import MovieListContainer from './listContainer';
import { useSearchParams } from 'react-router-dom';

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
    const [searchParams, setSearchParams] = useSearchParams();
    const topTenMoviesIdList = topMovieIdsList.slice(0,10)
    const {result} = useGetTopMoviesList(topTenMoviesIdList) 
    const [movies, setMovies] = useState<MediaTransport[]>([])
    const [pageTitle, setPageTitle] = useState<string>("TOP 10 IMDB MOVIES");
    const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') ?? '')
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [resultSize, setResultSize] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const lastPageNumber = 
    useMemo(() => { return Math.ceil(resultSize/PAGE_SIZE) + 1 }, [resultSize])

    const changeSearchQuery = useCallback((newSearchQuery: string) => {
        setSearchQuery(newSearchQuery)
        setSearchParams({search: newSearchQuery})
    },[])

    const incrementPageIndex = () => {
        setPageNumber(index => index+1)
    }
    const decerementPageIndex = () => {
        setPageNumber(index => index-1)
    }

    useEffect(() => {
        console.log('searchParams change captured', searchParams.get('search'))
        console.log('searchQuery', searchQuery)
        if(searchQuery) {
            setIsLoading(true);
            getMoviesSearchResult({searchString: searchQuery, pageIndex: pageNumber})
                .then((res) => {
                    console.log(res.data)
                    if(res.data.Response === 'True') {
                        setResultSize(res.data.totalResults)
                        setPageTitle(`Showing total ${res.data.totalResults} results for ${searchQuery}`)
                        setMovies(res.data.Search)
                        setIsLoading(false);
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },[searchQuery, pageNumber, JSON.stringify(searchParams.get('search'))])

    useEffect(() => {
        if(!!searchParams.get('search') ) {
            setSearchQuery(searchParams.get('search') ?? '')
        }
    },[JSON.stringify(searchParams.get('search'))])

    console.log(searchParams.get('search'))
    // console.log('pageNumber', pageNumber)
    // console.log('isLoading', isLoading)

    return (
        <Container>
            <Navbar changeSearchQuery={changeSearchQuery}/>
            <PageTitle>{pageTitle}</PageTitle>
            {movies?.length ? (
                <MovieListContainer movies={movies} isLoading={isLoading}/>
            ) : <MovieListContainer movies={result} isLoading={false}/> }
            {movies?.length && 
            <PaginationBar>
                <PrevPageButton 
                onClick={decerementPageIndex}
                disabled={pageNumber === 1}>
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
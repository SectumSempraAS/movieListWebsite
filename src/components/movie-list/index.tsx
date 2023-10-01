import {FC, useCallback, useEffect, useMemo, useState, useRef} from 'react';

import { MediaTransport } from '../../transports';
// import { useGetTopMoviesList } from './hooks';
import { Container, Loader, NextPageButton, PageIndex, PageTitle, PaginationBar, PrevPageButton } from './styles';
import topMovieIdsList from "../../idList.json"
import { useGetTopMoviesList } from './hooks';
import Navbar from '../navbar';
import { getMoviesSearchResult } from '../../client';
import MovieListContainer from './listContainer';

const PAGE_SIZE = 10;

// Movie List Page should show a list of Movie Name, Type, Year and Image.
// When a Movie is clicked, it should move to Detail Movie.


interface MovieListPageProps {
    moviesList?: MediaTransport[]
}

const MovieListPage:FC<MovieListPageProps> = () => {
    // const {topMovies} = useGetTopMoviesList();
    const topTenMoviesIdList = topMovieIdsList.slice(0,10)
    const {result} = useGetTopMoviesList(topTenMoviesIdList) 
    const [movies, setMovies] = useState<MediaTransport[]>([])
    const [pageTitle, setPageTitle] = useState<string>("TOP 10 IMDB MOVIES");
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [resultSize, setResultSize] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [lastElementVisible, setLastElementVisible] = useState<boolean>(false)
    const lastPageNumber = 
    useMemo(() => { return Math.ceil(resultSize/PAGE_SIZE) + 1 }, [resultSize])
    const myRef = useRef<HTMLInputElement>(null)

    const changeSearchQuery = useCallback((newSearchQuery: string) => {
        setPageNumber(1)
        setMovies([])
        setSearchQuery(newSearchQuery)
    },[])

    const custom = (shouldPaginate: boolean) => {
        if(shouldPaginate) setPageNumber(prevPageNumber => prevPageNumber + 1)
    }

    const incrementPageIndex = () => {
        setPageNumber(index => index+1)
    }
    const decerementPageIndex = () => {
        setPageNumber(index => index-1)
    }

    useEffect(() => {
        if(searchQuery) {
            setIsLoading(true)
            getMoviesSearchResult({searchString: searchQuery, pageIndex: pageNumber})
            .then((res) => {
                if(res.data.Response === 'True') {
                    setResultSize(res.data.totalResults)
                    setPageTitle(`Showing total ${res.data.totalResults} results for ${searchQuery}`)
                    if(pageNumber === 1) setMovies(res.data.Search)
                    else setMovies(prevMovies => [...prevMovies, ...res.data.Search,])
                    setIsLoading(false);
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },[searchQuery, pageNumber])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setLastElementVisible(entry.isIntersecting)
            custom(entry.isIntersecting)
        })
        observer.observe(myRef.current!)
    },[])

    // console.log(searchQuery)
    // console.log('pageNumber', pageNumber)
    console.log('isLoading', isLoading)

    return (
        <Container>
            <Navbar changeSearchQuery={changeSearchQuery}/>
            <PageTitle>{pageTitle}</PageTitle>
            {movies?.length ? (
                <MovieListContainer movies={movies} />
            ) : <MovieListContainer movies={result} /> }
            <div ref={myRef}>Hello</div>
            {isLoading && <Loader />}
            {/* {movies?.length && 
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
            </PaginationBar>} */}
        </Container>
    )
}

export default MovieListPage
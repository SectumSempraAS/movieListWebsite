import axios from "axios";
import { BaseTransport, MediaTransport, MovieSearchResultTransport } from "../transports";

const apikey = 'df92fdcc';

export const getMovieDetail = (movieId: string):Promise<BaseTransport<MediaTransport>> => {
    // const url = `http://www.omdbapi.com/?i=${movieId}&apikey=${apikey}`
    // return axios.get(url);

    return axios.get('http://www.omdbapi.com/', {
        params : {
            i : movieId,
            apikey: apikey
        }
    })
}

export const getMoviesSearchResult = (
    {
        searchString,
        pageIndex}
    : {
        searchString: string,
        pageIndex?: number
    }):Promise<BaseTransport<MovieSearchResultTransport>> => {
    const url = `http://www.omdbapi.com/?s=${searchString}&apikey=${apikey}`
    axios.get('http://www.omdbapi.com/')

    return axios.get('http://www.omdbapi.com/', {
        params : {
            s: searchString,
            ...(pageIndex ? {page: pageIndex} : {}),
            apikey: apikey
        }
    })
}
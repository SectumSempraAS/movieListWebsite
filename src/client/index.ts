import axios from "axios";
import { BaseTransport, MediaTransport, MovieSearchResultTransport } from "../transports";

const APIKEY = 'df92fdcc';

export const getMovieDetail = (movieId: string):Promise<BaseTransport<MediaTransport>> => {
    return axios.get('https://www.omdbapi.com/', {
        params : {
            i : movieId,
            apikey: APIKEY
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

    return axios.get('http://www.omdbapi.com/', {
        params : {
            s: searchString,
            ...(pageIndex ? {page: pageIndex} : {}),
            apikey: APIKEY
        }
    })
}
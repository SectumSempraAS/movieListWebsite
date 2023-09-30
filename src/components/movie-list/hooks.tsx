import { useEffect, useState } from "react"

import { MediaTransport } from "../../transports";
import topMovieIdsList from "../../idList.json"
import { getMovieDetail } from "../../client";

export const useGetTopMoviesList = () => {
    const [topMovies, setTopMovies] = useState<MediaTransport[]>([]);
    const topTenMoviesIdList = topMovieIdsList.slice(0,10)
    
    useEffect(() => {
        console.log("This idiot runs again")
        topTenMoviesIdList.map((topMovieId) => {
            getMovieDetail(topMovieId)
            .then((response) => {
                setTopMovies((movies) => {
                    // movies.push(response.data);
                    return [...movies, response.data];
                }) 
            })
        })
    },[])


    return {
        topMovies
    }
}
import { useContext, useEffect, useState } from "react"
import { FavMoviesContext } from "../../contexts/favMoviesContext"
import { getMovieDetail } from "../../client"
import { BaseTransport, MediaTransport } from "../../transports"
import MovieListContainer from "../movie-list/listContainer"

export const LikedMovieList = () => {
    const {favMoviesIdList} = useContext(FavMoviesContext)
    const [likedMovies, setlikedMovies] = useState<MediaTransport[]>([])
    console.log(favMoviesIdList)

    useEffect(() => {
        let promiseArray: Promise<BaseTransport<MediaTransport>>[] = []
        favMoviesIdList.forEach((movieId) => {
            promiseArray.push(getMovieDetail(movieId))
        })
        Promise.all(promiseArray)
        .then((responses) => {
            console.log(responses)
            responses.forEach((res) => [
                setlikedMovies(likedMovies => [...likedMovies, res.data])
            ])
        })
        .catch((error) => console.log(error))
    },[favMoviesIdList])

    return (
        <>
        {!!likedMovies 
            ? <MovieListContainer movies={likedMovies} isLoading={false}/>
            : null
        }
        </>
    )
}

export default LikedMovieList


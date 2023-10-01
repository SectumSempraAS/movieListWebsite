import { useContext, useEffect, useState } from "react"
import { FavMoviesContext } from "../../contexts/favMoviesContext"
import { getMovieDetail } from "../../client"
import { BaseTransport, MediaTransport } from "../../transports"
import MovieListContainer from "../movie-list/listContainer"
import { Container, EmptyMovieList, PageTitle } from "./styles"
import Navbar from "../navbar"

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
    },[])

    return (
        <Container>
            <Navbar showNavBar={false}/>   
            <PageTitle>YOUR FAVOURITE MOVIES</PageTitle>
            {!!likedMovies && likedMovies.length > 0 
                ? <MovieListContainer movies={likedMovies} />
                : <EmptyMovieList>No Favourite movies as of Now!</EmptyMovieList>
            }
        </Container>
    )
}

export default LikedMovieList


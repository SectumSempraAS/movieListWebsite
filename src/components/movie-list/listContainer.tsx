import { FC } from "react"
import { MediaTransport } from "../../transports"
import MovieCard from "../movie-card"
import { ListContainer } from "./styles"

interface MovieListContainerProps {
    movies: MediaTransport[]|void
    isLoading: boolean
}

const MovieListContainer:FC<MovieListContainerProps> = ({movies, isLoading}) => {
    console.log(movies)

    return (
        <ListContainer>
            {isLoading 
            ? <p>Loading</p>
            : 
            (!!movies && (
                movies.map((movie, index) => {
                    return (
                        <MovieCard key={`movie_${index}`} movie={movie}/>
                    )
                })
            ))}
        </ListContainer>
    )
}

export default MovieListContainer
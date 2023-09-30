import { FC, useContext, useState } from "react"
import { MediaTransport } from "../../transports"
import MovieCard from "../movie-card"
import { ListContainer } from "./styles"
import { FavMoviesContext } from "../../contexts/favMoviesContext"

interface MovieListContainerProps {
    movies: MediaTransport[]|void
    isLoading: boolean
}

const MovieListContainer:FC<MovieListContainerProps> = ({movies, isLoading}) => {
    const {favMoviesIdList} = useContext(FavMoviesContext)

    return (
        <ListContainer>
            {isLoading 
            ? <p>Loading</p>
            : 
            (!!movies && (
                movies.map((movie, index) => {
                    return (
                        <MovieCard key={`movie_${index}`} movie={movie} isLiked={favMoviesIdList.includes(movie.imdbID)}/>
                    )
                })
            ))}
        </ListContainer>
    )
}

export default MovieListContainer
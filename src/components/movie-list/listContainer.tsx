import { FC, memo, useContext } from "react"
import { MediaTransport } from "../../transports"
import MovieCard from "../movie-card"
import { ListContainer } from "./styles"
import { FavMoviesContext } from "../../contexts/favMoviesContext"

interface MovieListContainerProps {
    movies: MediaTransport[]|void
}

const MovieListContainer:FC<MovieListContainerProps> = ({movies}) => {
    const {favMoviesIdList} = useContext(FavMoviesContext)

    return (
        <ListContainer>
            {!!movies && (
                movies.map((movie, index) => {
                    return (
                        <MovieCard key={`movie_${index}`} movie={movie} isLiked={favMoviesIdList.includes(movie.imdbID)}/>
                    )
                })
            )}
        </ListContainer>
    )
}

export default memo(MovieListContainer)
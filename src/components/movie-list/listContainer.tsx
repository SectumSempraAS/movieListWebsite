import { FC } from "react"
import { MediaTransport } from "../../transports"

interface MovieListContainerProps {
    movies: MediaTransport[]|void
    isLoading: boolean
}

const MovieListContainer:FC<MovieListContainerProps> = ({movies, isLoading}) => {
    const list = movies
    console.log(movies)

    return (
        <div>
            {isLoading 
            ? <p>Loading</p>
            : <ul>
            {!!list && (
                list.map((movie, index) => {
                    return <li key={`movie_${index}`}>{movie.Title}</li>
                })
            )}
            </ul>}
        </div>
    )
}

export default MovieListContainer
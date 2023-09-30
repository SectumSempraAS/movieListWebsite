import { MediaTransport } from "../../transports"

const MovieListContainer = ({movies}: {movies: MediaTransport[]|void}) => {
    const list = movies
    console.log(movies)
    
    return (
        <div>
            <ul>
            {!!list && (
                list.map((movie, index) => {
                    return <li key={`movie_${index}`}>{movie.Title}</li>
                })
            )}
            </ul>
        </div>
    )
}

export default MovieListContainer
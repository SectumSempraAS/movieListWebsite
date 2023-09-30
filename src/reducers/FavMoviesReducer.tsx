import { MediaTransport } from "../transports"

interface ContextAction {
    type: 'ADD_FAV_MOVIE' | 'REMOVE_FAV_MOVIE'
    movie: MediaTransport
}

export const FavMoviesReducer = (state: MediaTransport[], action: ContextAction) => {
    const _movie = action.movie
    switch(action.type){
        case "ADD_FAV_MOVIE":
            return [...state, {
                imdbID: _movie.imdbID,
                Title: _movie.Title,
                Year: _movie.Year,
                Poster: _movie.Poster,
                Type: _movie.Type
            }]
        case "REMOVE_FAV_MOVIE":
            return state.filter(movie => movie.imdbID !== _movie.imdbID)
        default:
            return state
    }
}
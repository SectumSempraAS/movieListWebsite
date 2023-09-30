import { createContext, useEffect, useReducer, useState } from "react";
import { MediaTransport } from "../transports";

interface FavMoviesContextTransport {
    favMovies: MediaTransport[]
    setFavMovies: React.Dispatch<React.SetStateAction<MediaTransport[]>>
}

const FavMoviesContext = createContext({} as FavMoviesContextTransport)

const FavMoviesContextProvider = ({props}: any) => {
    const [favMovies, setFavMovies] = useState(() => {
            const storedMovies = localStorage.getItem('favs')
            return storedMovies ? JSON.parse(storedMovies) : []
        })
    
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favMovies))
    },[favMovies])
    return (
        <FavMoviesContext.Provider value={{favMovies, setFavMovies}}>
            {props.children}
        </FavMoviesContext.Provider>
    )
}

export {FavMoviesContextProvider, FavMoviesContext}

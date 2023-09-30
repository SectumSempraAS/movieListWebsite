import { createContext, useEffect, useState } from "react";
import { MediaTransport } from "../transports";

interface FavMoviesContextTransport {
    favMoviesIdList: string[]
    setFavMoviesIdList: React.Dispatch<React.SetStateAction<string[]>>
}

const FavMoviesContext = createContext({} as FavMoviesContextTransport)

const FavMoviesContextProvider = ({children}: any) => {
    const [favMoviesIdList, setFavMoviesIdList] = useState(() => {
            const storedMovies = localStorage.getItem('favs')
            return storedMovies ? JSON.parse(storedMovies) : []
        })
    
    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favMoviesIdList))
    },[favMoviesIdList])
    return (
        <FavMoviesContext.Provider value={{favMoviesIdList, setFavMoviesIdList}}>
            {children}
        </FavMoviesContext.Provider>
    )
}

export {FavMoviesContextProvider, FavMoviesContext}

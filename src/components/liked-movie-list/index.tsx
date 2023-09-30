import { useContext } from "react"
import { FavMoviesContext } from "../../contexts/favMoviesContext"

export const LikedMovieList = () => {
    const {favMoviesIdList, setFavMoviesIdList} = useContext(FavMoviesContext)
    console.log(favMoviesIdList)
    return (
        <>LIKED MOVIES</>
    )
}

export default LikedMovieList


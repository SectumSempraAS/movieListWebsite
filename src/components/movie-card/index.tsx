import  {FC, useContext, useMemo} from 'react'

import { Container, FavButton, ImageContainer, MovieDetailConatiner, Title } from './styles'
import { MediaTransport } from '../../transports'
import { FavMoviesContext } from '../../contexts/favMoviesContext'
import { useNavigate } from 'react-router-dom'

interface MovieCardProps {
    movie: MediaTransport
    isLiked: boolean
}

const MovieCard:FC<MovieCardProps> = ({movie, isLiked = false}) => {
    const {favMoviesIdList, setFavMoviesIdList} = useContext(FavMoviesContext)
    const _likedButtontext = useMemo(() => isLiked ? '✓' : '+' , [isLiked]) 
    const navigate = useNavigate();

    const toggleFavourite = (e:any) => {
        e.stopPropagation();
        if(isLiked) {
            const newFavList:string[] = []
            favMoviesIdList.forEach((movieId) => {
                if(movieId !== movie.imdbID)
                    newFavList.push(movieId)
            })
            setFavMoviesIdList(newFavList)
        } else {
            setFavMoviesIdList(list => [...list, movie.imdbID])
        }
    }

    const navigateToDetailPage = () => {
        navigate(`movieDetail/${movie.imdbID}`)
    }

    return (
        <Container onClick={navigateToDetailPage}>
            <ImageContainer>
                <FavButton onClick={(e) => toggleFavourite(e)}>{_likedButtontext}</FavButton>
                <img src={movie.Poster} loading='lazy'/>
            </ImageContainer>
            <MovieDetailConatiner>
                <Title>{movie.Title}</Title>
                <span>{movie.Year}</span>
                <span>{movie.Type}</span>
            </MovieDetailConatiner> 
        </Container>
    )
}

export default MovieCard
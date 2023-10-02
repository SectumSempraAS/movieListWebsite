import  {FC, memo, useContext, useEffect, useMemo, useState} from 'react'

import { Container, FavButton, ImageContainer, MovieDetailConatiner, Title } from './styles'
import { MediaTransport } from '../../transports'
import { FavMoviesContext } from '../../contexts/favMoviesContext'
import { useNavigate } from 'react-router-dom'
import SkeletonMovieCard from './skeleton'

interface MovieCardProps {
    movie: MediaTransport
    isLiked: boolean
}

const MovieCard:FC<MovieCardProps> = ({movie, isLiked = false}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {favMoviesIdList, setFavMoviesIdList} = useContext(FavMoviesContext)
    const _likedButtontext = useMemo(() => isLiked ? '✓' : '+' , [isLiked]) 
    const navigation = useNavigate();

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
        navigation(`/movieDetail/${movie.imdbID}`)
    }

    useEffect(() => {
        setTimeout(() => setIsLoading(false),500)
    },[])

    return (
        <>
            {isLoading ? <SkeletonMovieCard />
             : (
                <Container onClick={navigateToDetailPage}>
                    <ImageContainer>
                        <FavButton onClick={(e) => toggleFavourite(e)}>{_likedButtontext}</FavButton>
                        <img src={movie.Poster} loading='lazy' alt={movie.Title}/>
                    </ImageContainer>
                    <MovieDetailConatiner>
                        <Title>{movie.Title}</Title>
                        <span>Year: {movie.Year}</span>
                        <span>Type: {movie.Type}</span>
                    </MovieDetailConatiner> 
                </Container>
             )}
        </>
    )
}

export default memo(MovieCard)
import  {FC} from 'react'

import { MediaTransport } from "../../transports"
import { Container, FavButton, ImageContainer, MovieDetailConatiner, Title } from './styles'
import favicon from "../../../public/fav.svg"

interface MovieCardProps {
    movie: MediaTransport
}

const MovieCard:FC<MovieCardProps> = ({movie}) => {
    return (
        <Container>
            <ImageContainer>
                <FavButton>
                    <img src={favicon} />
                </FavButton>
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
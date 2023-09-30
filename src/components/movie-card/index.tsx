import  {FC} from 'react'

import { MediaTransport } from "../../transports"
import { Container, ImageContainer, MovieDetailConatiner, Title } from './styles'

interface MovieCardProps {
    movie: MediaTransport
}

const MovieCard:FC<MovieCardProps> = ({movie}) => {
    return (
        <Container>
            <ImageContainer>
                <img src={movie.Poster}/>
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
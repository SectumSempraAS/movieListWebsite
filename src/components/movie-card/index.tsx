import  {FC} from 'react'

import { MediaTransport } from "../../transports"
import { Container, Title } from './styles'

interface MovieCardProps {
    movie: MediaTransport
}

const MovieCard:FC<MovieCardProps> = ({movie}) => {
    return (
        <Container>
            <Title>{movie.Title}</Title>
            <span>{movie.Year}</span>
            <span>{movie.Type}</span>
        </Container>
    )
}

export default MovieCard
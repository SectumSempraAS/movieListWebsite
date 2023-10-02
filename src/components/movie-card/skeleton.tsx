import  {memo} from 'react'

import { Container, FavButton, ImageContainer, MovieDetailConatiner, Skeleton, Title } from './styles'

const SkeletonMovieCard = () => {
    const full = '100%'
    return (
        <Container>
            <ImageContainer>
                <FavButton><Skeleton height={full} width={full} borderRadius={'0.25rem'}/></FavButton>
                <Skeleton height={full} width={full} borderRadius={'0'}/>
            </ImageContainer>
            <MovieDetailConatiner>
                <Title><Skeleton height={full} width={full} borderRadius={'0.25rem'}/></Title>
                <span><Skeleton height={full} width={full} borderRadius={'0.25rem'}/></span>
                <span><Skeleton height={full} width={full} borderRadius={'0.25rem'}/></span>
            </MovieDetailConatiner> 
        </Container>
    )
}

export default memo(SkeletonMovieCard)
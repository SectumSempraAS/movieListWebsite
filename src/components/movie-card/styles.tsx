import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex;
        position: relative;
        flex-direction: column;
        border-radius: 0.25rem;
        border: 1px solid black;
        color: black;
        margin: 0.875rem 0;
        width: fit-content;
    `,
)

export const ImageContainer = styled.div(
    () => css`
        display: block;

        & > img {
            object-fit: cover;
            max-width: 100%;
            height: 15rem;
        }
    `,
)

export const Title = styled.span(
    () => css`
        font-size: 1rem;
        font-weight: 700;
        width: 100%;
        line-height: 0.75rem;
    `,
)

export const MovieDetailConatiner = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
    `,
)

interface LikedProps {
    isLiked: boolean
}

// export const FavButton = styled.div<LikedProps>(
//     ({isLiked}) => css`
//         background-color: ${isLiked ? '#f50243' : 'white'}; 
//         color: ${isLiked ? 'white' : 'black'};
//         border-radius: 0.25rem;
//         position: absolute;
//         right: 40px;
//         font-size: 10px;
//         padding: 0.25rem;
//     `,
// )

export const FavButton = styled.button(
    () => css`
        background-color: 'white'; 
        color: 'white;
        border-radius: 0.25rem;
        position: absolute;
        right: 0.25rem;
        font-size: 10px;
        padding: 0.25rem;
    `,
)
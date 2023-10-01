import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex;
        position: relative;
        flex-direction: column;
        border-radius: 0.25rem;
        border: 1px solid #0000011;
        color: white;
        margin: 0.875rem 0;
        width: fit-content;
        background-color: #1d2024;
        padding: 0.5rem 0.3rem;
    `,
)

export const ImageContainer = styled.div(
    () => css`
        display: block;

        & > img {
            object-fit: cover;
            max-width: 100%;
            min-height: 10rem;
        }

        @media only screen and (min-width: 768px) {
            & > img {
                object-fit: cover;
                max-width: 100%;
                min-height: 13rem;
            }
        }
    `,
)

export const Title = styled.div(
    () => css`
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        line-height: 1rem;
    `,
)

export const MovieDetailConatiner = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        justify-content: end;
        font-size: 14px;
        padding: 0.3rem 0.5rem;

        & > span {
            color: #a2a3a2;
        }
    `,
)

export const FavButton = styled.button(
    () => css`
        background-color: #000000aa;
        border: 2px solid black;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        font-size: 16px;
        font-weight: 700;
        padding: 0.5rem;

        @media only screen and (min-width: 768px) {
            font-size: 24px;
        }
    `,
)
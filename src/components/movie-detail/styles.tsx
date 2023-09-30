import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const OuterContainer = styled.div(
    () => css`
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
)
export const Container = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1rem;
        font-size: 14px;
        background-color: black;
        color: white
    `,
)

export const Title = styled.h1(
    () => css`
        color: white;
        font-style: lato;
    `,
)

export const PosterContainer = styled.div(
    () => css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1d2024;
        padding: 1rem;
    `,
)

export const Poster = styled.img(
    () => css`
        height: 400px;
        width: 250px;
        border: 1px solid black;
    `,
)

export const Rating = styled.div(
    () => css`
        font-weight: 400;
        line-height: 1rem;
        margin: 0 0 0.3rem;
    `,
)

export const DetailRow = styled.div(
    () => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.25rem 0;
    `,
)
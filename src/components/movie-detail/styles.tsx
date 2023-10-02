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
        font-size: 14px;
        background-color: black;
        color: white;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        @media only screen and (min-width: 768px) {
            flex-direction: row;
            align-items: end;
            justify-content: center;
        }
    `,
)

export const TopContainer = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        color: white;
        max-width: 800px;

        @media only screen and (min-width: 768px) {
            padding: 1rem;
        }

        @media only screen and (min-width: 1024px) {
            justify-content: end;
            padding: 1.5rem;
        }
    `,
) 

export const BottomContainer = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        color: white;
        max-width: 800px;
        padding: 1rem;

        @media only screen and (min-width: 768px) {
            padding: 1rem;
        }

        @media only screen and (min-width: 1024px) {
            justify-content: flex-end;
            padding: 1.5rem;
        }
    `,
)

export const Title = styled.h1(
    () => css`
        color: #fabd07;
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

        @media only screen and (min-width: 768px) {
            justify-content: center;
        }
    `,
)

export const PosterInnerContainer = styled.div(
    () => css`
        display: flex;
        position: relative;
    `,
)

export const Poster = styled.img(
    () => css`
        height: 370px;
        width: 200px;
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
        font-size: 14px;
        line-height: 1rem;
        margin: 0.3rem 0;

        @media only screen and (min-width: 768px) {
            margin: 0.4rem 0;;
        }
    `,
)

export const PlotTitle = styled.span(
    () => css`
        font-size: 20px;
        font-weight: 600; 
        margin-top: 1.5rem;
        color: #fabd07;
    `,
)

export const Plot = styled.div(
    () => css`
        font-size: 14px;
        line-height: 1rem;
        font-style: italic;
        color: #a2a3a2;
    `,
)
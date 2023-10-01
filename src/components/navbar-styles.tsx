import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex; 
        background-color: #1d2024;
        width: 100%;
        justify-content: center;
        padding: 0;
    `,
)

export const InnerContainer = styled.div(
    () => css`
        display: flex;
        flex-direction: row;
        max-width: 1024px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0.5rem 0.8rem;

        @media only screen and (min-width: 768px) {
            padding: 0.5rem 1rem;
        }
    `,
)

export const NavButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fabd07;
    color: black;
    border: 1px solid black;
    padding: 0.2rem;
    cursor: pointer;

    & > img {
        height: 1rem;
    }

    @media only screen and (min-width: 768px) {
        padding: 0.5rem 1rem;
    }
`

export const NavText = styled.span(
    () => css`
        display: none;

        @media only screen and (min-width: 768px) {
            display: flex;
            margin: 0 0.25rem;
        }
    `,
)

export const HomeNavigation = styled(NavButton)(
    () => css`
        border-radius: 0.25rem;
    `,
)

export const FavMoviePageNavigation = styled(HomeNavigation)``
    
export const SeachBar = styled.div(
    () => css`
        display: flex;
    `,
)

export const SearchInput = styled.input(
    () => css`
        color: black;
        background-color: white;
        border-radius: 0.25rem 0 0 0.25rem;
        border: 1px solid black;
        padding: 0.25rem;

        @media only screen and (min-width: 768px) {
            padding: 0.5rem 1rem;
        }
    `,
)

export const SearchButton = styled(NavButton)`
    border-radius: 0 0.25rem 0.25rem 0;
    padding: 0.25rem;
`
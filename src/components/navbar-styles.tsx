import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex; 
        background-color: #d7dadb;
        width: 100%;
        justify-content: center;
        padding: 0.75rem
    `,
)
    

export const SearchInput = styled.input(
    () => css`
        color: black;
        background-color: white;
        border-radius: 0.25rem 0 0 0.25rem;
        border: 1px solid black;
        padding: 0.5rem;
    `,
)

export const SearchButton = styled.button`
    background-color: #e3e2de;
    border-radius: 0 0.25rem 0.25rem 0;
    border: 1px solid black;
    padding: 0.5rem;
`
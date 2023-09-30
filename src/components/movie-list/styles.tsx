import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        width: 100%;
    `,
)

export const PageTitle = styled.h1(
    () => css`
        display: flex;
        font-size: 1.25rem;
    `,
)

export const PaginationBar = styled.div(
    () => css`
        display: flex;
        font-size: 1rem;
        line-height: 0.2rem;
        justify-content: center;
    `,
)

export const PageButton = styled.button(
    () => css`
        padding: 0.1rem 1.5rem;
        border-radius: 0.375rem;
        background-color: #e3e2de;
        border: 1px solid black;
        color: black;
    `,
)

export const PrevPageButton = styled(PageButton)(
    () => css`
        border-radius: 0.375rem 0 0 0.375rem;
    `,
)
export const NextPageButton = styled(PageButton)(
    () => css`
    border-radius: 0 0.375rem 0.375rem 0;
    `,
)

export const PageIndex = styled.div(
    () => css`
        padding: 1rem;
        border-top: 1px solid black;;
        border-bottom: 1px solid black;
    `,
)

export const ListContainer = styled.div(
    () => css`
        display: block
        > li {
            list-style-type: none;
        }
    `,
)
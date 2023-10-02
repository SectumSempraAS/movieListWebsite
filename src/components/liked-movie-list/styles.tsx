import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    `,
)

export const PageTitle = styled.h1(
    () => css`
        display: flex;
        font-size: 1.25rem;

        @media only screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
        @media only screen and (min-width: 1024px) {
            font-size: 2rem;
        }
    `,
)

export const EmptyMovieList = styled(PageTitle)``
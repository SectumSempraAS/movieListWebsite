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
    `,
)

export const EmptyMovieList = styled(PageTitle)``
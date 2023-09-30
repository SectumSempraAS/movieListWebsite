import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const Container = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        border-radius: 0.25rem;
        border: 1px solid black;
        color: black;
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
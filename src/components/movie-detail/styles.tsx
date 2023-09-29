import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const RatingContainer = styled.div(
    () => css`
        display: flex
        justify-content: space-between;
        align-items: center;
    `,
)

export const Rating = styled.div(
    () => css`
        display: flex
    `,
)
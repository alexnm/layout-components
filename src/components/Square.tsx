import css from '@styled-system/css'
import styled from 'styled-components'

export interface SquareProps {
  size?: number
}

export const Square = styled.div<SquareProps>(({ size = 8 }) =>
  css({
    width: size,
    height: size,
    bg: 'lightblue',
  })
)

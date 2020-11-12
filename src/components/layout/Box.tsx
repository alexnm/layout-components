import css from '@styled-system/css'
import styled from 'styled-components'

export interface BoxProps {
  padding?: number
  withBorder?: boolean
}

export const Box = styled.div<BoxProps>(({ padding, withBorder = false }) =>
  css({
    padding: padding,
    border: withBorder ? '1px solid grey' : 'none',
    flex: 1,
  })
)

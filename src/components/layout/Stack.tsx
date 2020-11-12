import css from '@styled-system/css'
import styled from 'styled-components'

export interface StackProps {
  gap?: number
  align?: 'flex-start' | 'center' | 'flex-end'
  wrap?: boolean
}

export const Stack = styled.div<StackProps>(({ gap = 0, align = 'flex-start', wrap = false }) =>
  css({
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: align,
    flexWrap: wrap ? 'wrap' : 'nowrap',

    '& > :not(:first-child)': {
      marginTop: gap,
    },
  })
)

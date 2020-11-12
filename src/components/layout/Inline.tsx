import css from '@styled-system/css'
import styled from 'styled-components'

export interface InlineProps {
  gap?: number
  align?: 'flex-start' | 'center' | 'flex-end'
  wrap?: boolean
}

export const Inline = styled.div<InlineProps>(({ gap = 0, align = 'flex-start', wrap = false }) =>
  css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: align,
    flexWrap: wrap ? 'wrap' : 'nowrap',

    '& > :not(:first-child)': {
      marginLeft: gap,
    },
  })
)

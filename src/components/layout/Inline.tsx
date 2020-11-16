import React from 'react'
import css from '@styled-system/css'
import styled from 'styled-components'

export interface InlineProps {
  gap?: number
  align?: 'flex-start' | 'center' | 'flex-end'
  wrap?: boolean
}

export const InlineArrangement = styled.div<InlineProps>(
  ({ gap = 0, align = 'flex-start', wrap = false }) =>
    css({
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: align,
      flexWrap: wrap ? 'wrap' : 'nowrap',
      marginTop: -gap,
      marginLeft: -gap,

      '& > *': {
        marginLeft: gap,
        marginTop: gap,
      },
    })
)

export const Inline: React.FC<InlineProps> = (props) => (
  <div style={{ width: '100%', display: 'flex' }}>
    <InlineArrangement {...props} />
  </div>
)

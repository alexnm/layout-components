import React from 'react'
import css from '@styled-system/css'
import styled from 'styled-components'

export interface StackProps {
  gap?: number
  align?: 'flex-start' | 'center' | 'flex-end'
}

export const Stack = styled.div<StackProps>(
  ({ gap = 0, align = 'flex-start' }) =>
    css({
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: align,

      '& > :not(:first-child)': {
        marginTop: gap,
      },
    })
)

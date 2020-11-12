import css from '@styled-system/css'
import styled from 'styled-components'

export interface RowProps {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
}

export const Row = styled.div<RowProps>(({ justify = 'flex-start' }) =>
  css({
    display: 'flex',
    justifyContent: justify,
    alignItems: 'flex-start',
    width: '100%',
  })
)

import css from '@styled-system/css'
import styled from 'styled-components'

export interface GridProps {
  columns: string
  columnGap?: number
  rowGap?: number
}

export const Grid = styled.div<GridProps>(({ columns, columnGap, rowGap }) =>
  css({
    display: 'grid',
    gridTemplateColumns: columns,
    rowGap,
    columnGap,
    width: '100%',
  })
)

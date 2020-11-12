import styled from 'styled-components'
import { variant } from 'styled-system'
import css from '@styled-system/css'
import React from 'react'

export interface ButtonProps {
  size: 'small' | 'medium' | 'large'
  variant: 'solid' | 'outline'
}

const ButtonElement = styled.button<ButtonProps>(
  css({
    appearance: 'none',
    border: 'none',
    borderRadius: 1,
    lineHeight: 1.2,
    paddingTop: 0,
    paddingBottom: 0,
    transition: 'all 0.15s ease-in',
    borderWidth: 1,
    borderStyle: 'solid',
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        paddingLeft: 1,
        paddingRight: 1,
        height: 5,
        fontSize: 1,
      },
      medium: {
        paddingLeft: 2,
        paddingRight: 2,
        height: 6,
        fontSize: 1,
      },
      large: {
        paddingLeft: 3,
        paddingRight: 3,
        height: 7,
        fontSize: 2,
      },
    },
  }),
  variant({
    variants: {
      solid: {
        color: 'white',
        bg: 'accents.200',
        borderColor: 'accents.200',
        '&:hover': {
          bg: 'accents.300',
          borderColor: 'accents.300',
        },
      },
      outline: {
        color: 'accents.200',
        bg: 'white',
        borderColor: 'accents.200',
        '&:hover': {
          borderColor: 'accents.400',
          color: 'accents.400',
        },
      },
    },
  })
)

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonElement {...rest}>{children}</ButtonElement>
}

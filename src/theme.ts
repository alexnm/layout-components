import { Theme } from "styled-system";

const theme: Theme = {
  colors: {
    black: '#121212',
    white: '#fff',
    accents: {
      100: '#003eb2',
      200: '#0055cc',
      300: '#0074f0',
      400: '#0f8fff',
      500: '#14a9ff',
      600: '#4cc3ff',
      700: '#85dcff',
      800: '#c2f0ff',
      900: '#e5faff'
    },
    neutrals: {
      300: '#333',
      500: '#999',
      700: '#bbb'
    },
  },
  space: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  sizes: [0, 4, 8, 12, 16, 24, 32, 48, 64],
  fontSizes: [14, 16, 18, 24],
  radii: [0, 4, 8],
  shadows: {
    drop: '0 2px 16px 8px rgba(18,18,18, 0.3)',
    offset: '10px 10px 5px -3px rgba(0,0,0,0.19)'
  },
}

export default theme;
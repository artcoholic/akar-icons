import { createGlobalStyle } from 'styled-components';

const light = {
  colors: {
    bg: {
      primary: 'white',
      secondary: '#D5F4FD',
      tertiary: '#F1FCFF',
      transparent: 'rgba(255, 255, 255, 0.8)',
    },
    content: {
      primary: '#082D41',
      secondary: '#D5F4FD',
      tertiary: '#E1F0FF',
    },
    boxShadow: 'rgb(15,23,32 / 0.3)',
    border: '#F1FCFF'
  }
}

const dark = {
  colors: {
    bg: {
      primary: '#0C1820',
      secondary: '#082636',
      tertiary: '#071D2A',
      transparent: 'rgba(12,24,32,0.8)',
    },
    content: {
      primary: '#D5F4FD',
      secondary: '#082636',
      tertiary: '#102A4C',
    },
    border: '#082636',
  }
}

const theme = {
  breakpoints: ['768px'],
}

export const lightTheme = { ...theme, ...light };
export const darkTheme = { ...theme, ...dark };

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.colors.content.primary};
    background-color: ${props => props.theme.colors.bg.primary};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0
  }

  a, a:hover {
    text-decoration: none;
  }
`
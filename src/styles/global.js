import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //transition: all 0.1s ease-in-out;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PRIMARY};

    font-family: "Spline Sans", sans-serif;

    span {
    color: ${({theme}) => theme.COLORS.SECUNDARY}
    }

    a {
      text-decoration: none;
    }

    padding: 2rem;
  }
`
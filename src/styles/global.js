import { createGlobalStyle } from 'styled-components'
import { DEVICE } from "../styles/deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE.LG}) {
      font-size: 15px;
     };

     @media (max-width: ${DEVICE.MD}) {
      font-size: 14px;
     };

     @media (max-width: ${DEVICE.SM}) {
      font-size: 10px;
     };

    @media (max-width: ${DEVICE.XS}) {
      font-size: 8px;
     };
    
  }

  body {
    width: 100%;
    overflow-x: hidden;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    
    font-family: "Spline Sans", sans-serif;
    padding: 2rem;

    @media (max-width: ${DEVICE.SM}) {
      padding: 1rem;
     }

    span {
    color: ${({theme}) => theme.COLORS.SECUNDARY}
    }

    a {
      text-decoration: none;
    }
  }

  ::-webkit-scrollbar {
      width: 0.9rem;
      border-radius: 0.8rem;
    }

  ::-webkit-scrollbar-track {
   background: ${({ theme }) => theme.COLORS.BACKGROUND};
    }

  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.SECUNDARY};
      border-radius: 0.8rem;
    }
`
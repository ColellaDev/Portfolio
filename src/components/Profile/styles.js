import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  min-height: 100vh;
`;

export const Hero = styled.div`
  font-size: 1.3rem;
  margin-top: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  @media (max-width: ${DEVICE.MD}) {
    flex-direction: column-reverse;
    gap: 3rem;
    margin-top: 10rem;
   
  }

  @media (max-width: ${DEVICE.SM}) {
    background-color: red;
    font-size: 2rem;
    
  }
  
`;

export const About = styled.div`
  width: 32rem;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    margin-top: 1rem;
  }

  p {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  .iconLink {
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 2rem;

    &:hover {
      transition: all 0.3s ease-in;
      scale: 1.2;
    }
  }

  .curriculoBtn {
    margin-right: 3rem;
    padding: 0.6rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 1.5rem;
    font-weight: 400;

    box-shadow: 0px 0px 6px 1px ${({ theme }) => theme.COLORS.SECUNDARY};

    &:hover {
      transition: all 0.3s ease-in;
      box-shadow: 0px 0px 10px 4px ${({ theme }) => theme.COLORS.SECUNDARY};
    }
  }
`;

export const Avatar = styled.div`
  img {
    width: 20rem;
    border-radius: 31% 69% 73% 27% / 35% 58% 42% 65%;
    border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border: solid;
    box-shadow: 14px 0px 41px 19px rgba(62, 66, 66, 0.22);
  }
`;

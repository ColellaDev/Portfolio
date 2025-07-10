import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;

  h1 {
    font-size: 2.5rem;
  }

  .skillsStyled {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20rem;
    margin-top: 8rem;

    @media (max-width: ${DEVICE.LG}) {
      margin-bottom: 10rem;
      gap: 4rem;
    }

    @media (max-width: ${DEVICE.MD}) {
      flex-direction: column;
      margin-top: 5rem;
      margin-bottom: 4rem;
      gap: 3rem;
    }

    @media (max-width: ${DEVICE.SM}) {
      margin-bottom: -4rem;
    }
  }
`;

export const HardSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 40rem;
  gap: 1.5rem;

  .skill-card {
    background: ${({ theme }) => `linear-gradient(to top, ${theme.COLORS.BACKGROUND_700}, transparent)`};
    border: 1px solid ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-align: center;
    width: 8rem;
    height: 8rem;
    transform-style: preserve-3d; /* Necessário para o vanilla-tilt */

    img {
      width: 4rem;
      transform: translateZ(20px); /* Adiciona profundidade à imagem */
    }

    span {
      font-size: 0.9rem;
      font-weight: 500;
      transform: translateZ(10px); /* Adiciona profundidade ao texto */
    }
  }
`;

export const Softskills = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 30rem;
  align-items: center;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};

  li {
    list-style-type: none;
    font-size: 1.3rem;
    margin-bottom: 1.1rem;

    svg {
      font-size: 2rem;
      margin-right: 1rem;
    }

    &:hover {
      svg {
        scale: 1.2;
        color: ${({ theme }) => theme.COLORS.SECUNDARY_100};
        transition: 0.3s ease-in-out;
      }
    }
  }
`;

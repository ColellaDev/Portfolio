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
    transform-style: preserve-3d; 
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      box-shadow: 0 0 20px -5px ${({ theme }) => theme.COLORS.SECUNDARY_100};
    }

    img {
      width: 4rem;
      transform: translateZ(20px); 
    }

    span {
      font-size: 0.9rem;
      font-weight: 500;
      transform: translateZ(10px); 
    }
  }
`;

export const Softskills = styled.div`
  width: 24rem;

  @media (max-width: ${DEVICE.MD}) {
    width: 90%;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  li {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border: 1px solid transparent;
    border-radius: 0.8rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: default;
    transition: all 0.3s ease-in-out;

    svg {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      transform: translateY(-5px) scale(1.02);
      border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      box-shadow: 0 0 20px -5px ${({ theme }) => theme.COLORS.SECUNDARY_100};
      svg {
        color: ${({ theme }) => theme.COLORS.SECUNDARY};
        transform: scale(1.1);
      }
    }
  }
`;

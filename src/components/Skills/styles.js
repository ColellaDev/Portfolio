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
  width: 30rem;
  gap: 1.5rem;

  .imageContainer {
    position: relative;
  }

  .tooltip {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    border-radius: 1rem;
    padding: 1rem;
    background: linear-gradient(
      0deg,
      ${({ theme }) => theme.COLORS.SECUNDARY} 0%,
      ${({ theme }) => theme.COLORS.BACKGROUND} 35%
    );
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 1.1rem;
    opacity: 0;
    transition: 0.6s;
  }

  .imageContainer:hover .tooltip {
    opacity: 1;
    height: 100%;
  }

  img {
    width: 4.5rem;
    border: solid;
    border-radius: 1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
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
        color: ${({ theme }) => theme.COLORS.SECUNDARY};
        transition: 0.3s ease-in-out;
      }
    }
  }
`;

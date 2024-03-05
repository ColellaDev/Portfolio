import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${DEVICE.MD}) {
      margin-bottom: 5.7rem;
    }

  h1 {
    font-size: 2.5rem;
  }

  .projectsCard {
    display: flex;
    margin-top: 8rem;
    gap: 4rem;

    @media (max-width: ${DEVICE.MD}) {
      flex-direction: column;
      gap: 3.5rem;
      margin-top: 4rem;
      margin-bottom: 8rem;
    }
  }

  .card {
    width: 21rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 15px 5px ${({ theme }) => theme.COLORS.SECUNDARY};

    img {
      width: 100%;
      height: 55%;
      border-radius: 1rem;
    }

    h3 {
      margin-left: 1rem;
    }

    p {
      margin-left: 1rem;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      padding: 0.4rem 1rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      box-shadow: 0px 0px 6px 1px ${({ theme }) => theme.COLORS.SECUNDARY};
      border-radius: 1.5rem;
      transition: 400ms;

      &:hover {
        color: ${({ theme }) => theme.COLORS.SECUNDARY};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        box-shadow: 0px 0px 10px 4px ${({ theme }) => theme.COLORS.SECUNDARY};
      }
    }
  }
`;

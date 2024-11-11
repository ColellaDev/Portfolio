import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;

  @media (max-width: ${DEVICE.MD}) {
    margin-bottom: 5.7rem;
  }

  @media (max-width: ${DEVICE.SM}) {
    margin-top: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 5rem;
  }

  .projectsCard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-top: 5rem;
    gap: 4rem;

    @media (max-width: ${DEVICE.LG}) {
      margin-left: 7rem;
      gap: 4rem;
      margin-bottom: 8rem;
    }

    @media (max-width: ${DEVICE.MD}) {
      flex-direction: column;
      margin-left: 0rem;
      gap: 3.5rem;
      margin-top: 4rem;
    }
  }

  .card {
    width: 21rem;
    height: 100%;
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

  .cardMobile {
    width: 21rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 15px 5px ${({ theme }) => theme.COLORS.SECUNDARY};

    h3 {
      margin-left: 1rem;
    }

    p {
      margin-left: 1rem;
    }
  }

  .imgMobile {
    margin: 1rem;

    img {
      margin-left: 0.5rem;
      width: 30%;
      height: 100%;
      border-radius: 1rem;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

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

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

  .featured-project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    padding: 1rem;
    margin: 3rem 1rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_PRIMARY};
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 1rem;
    width: 90%;
    max-width: 75rem;

    @media (max-width: ${DEVICE.LG}) {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .featured-image {
      img {
        width: 100%;
        border-radius: 0.5rem;
        transition: transform 0.3s ease;
        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .featured-details {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      .featured-tag {
        align-self: flex-start;
        background-color: ${({ theme }) => theme.COLORS.SECUNDARY_100};
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: bold;
        
        @media (max-width: ${DEVICE.LG}) {
          align-self: center;
        }
      }

      h3 {
        font-size: 2.2rem;
        margin: 0;
      }

      h4 {
        font-size: 1.3rem;
        margin-top: 1rem;
        margin-bottom: 0;
      }

      .long-description {
        line-height: 1.6;
        margin: 0;
      }

      ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
      }
    }
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
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    h3 {
      margin-left: 1rem;
    }

    p {
      margin: 1rem;
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
      margin: 0.3rem 0.8rem;
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

  .techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0.5rem;
  }

  .tech-tag {
    background: ${({ theme }) => theme.COLORS.TAG};
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 0.7rem;
    padding: 0.2rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
`;

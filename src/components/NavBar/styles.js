import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  height: 4rem;
  padding: 3rem;
  font-size: 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2rem;
    span {
      color: ${({ theme }) => theme.COLORS.SECUNDARY};
    }
  }

  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 600;

    a {
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;

      &.active {
        background-color: ${({ theme }) => theme.COLORS.SECUNDARY_100};
        color: ${({ theme }) => theme.COLORS.BACKGROUND};
      }

      &:hover {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      }
    }
  }

  @media (max-width: ${DEVICE.MD}) {
    justify-content: flex-end;
    gap: 3rem;

    svg {
      font-size: 1.4rem;
    }

    h1 {
      margin-right: 17rem;
      font-size: 1.8rem;
    }

    ul {
      margin-right: 3rem;
      position: absolute;
      right: 0px;
      top: 90px;
      font-size: 1rem;
      flex-direction: column;
      gap: 2rem;


      @media (max-width: ${DEVICE.SM}) {
        right: 0px;
        top: 50px;
      }
    }

    @media (max-width: ${DEVICE.SS}) {
      justify-content: flex-start;

      ul {
       right: 100px;
       top: 60px;
      }
      }

      @media (max-width: ${DEVICE.XS}) {
      justify-content: flex-start;

      ul {
       right: 0px;
       top: 60px;
      }
      }

    .menu-visible {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .menu-hidden {
      visibility: hidden;
      opacity: 0;
      transform: translateY(-30%);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

  }

  @media (max-width: ${DEVICE.SM}) {
    padding: 1rem;

    h1 {
      margin-right: 5rem;
      font-size: 2rem;
    }

    svg {
      font-size: 1.8rem;
    }
    
  }

  @media (max-width: ${DEVICE.XS}) {
    padding: 1rem;

    svg {
      font-size: 2.3rem;
    }

    h1 {
      margin-right: 2rem;
      font-size: 1.9rem;
    }
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;
  cursor: pointer;

  > svg {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.SECUNDARY};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: ${DEVICE.MD}) {
    display: block;
  }

  @media (max-width: ${DEVICE.SM}) {
    padding: 2.5rem;
  }
`;

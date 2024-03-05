import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;

  height: 4rem;
  padding: 4rem;
  font-size: 1.25rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 600;

    li {
      position: relative;
      cursor: pointer;
      color: ${({ theme }) => theme.COLORS.PRIMARY};

      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        transform: scale(0);
        transform-origin: right;
        transition: transform 0.4s ease-in-out;
      }

      &:hover:before {
        transform: scale(1);
        transform-origin: left;
        background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
        box-shadow: 0px 0px 5px 0.7px ${({ theme }) => theme.COLORS.SECUNDARY};
      }

      &:hover {
        transition: 0.4s ease-in-out;
        color: ${({ theme }) => theme.COLORS.SECUNDARY};
      }
    }
  }

  @media (max-width: ${DEVICE.MD}) {
    justify-content: flex-end;
    gap: 3rem;

    h1 {
      margin-right: 17rem;
      font-size: 1.8rem;
    }

    ul {
      margin-right: 3rem;
      position: absolute;
      right: 0;
      top: 90px;
      font-size: 1rem;
      flex-direction: column;
      gap: 2rem;

      @media (max-width: ${DEVICE.SM}) {
        right: 0;
        top: 50px;
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
    h1 {
      margin-right: 5rem;
      font-size: 2rem;
    }
    padding: 1rem;
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

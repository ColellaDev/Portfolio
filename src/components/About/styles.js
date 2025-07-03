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

  .aboutMe {
    display: flex;
    align-items: center;
    gap: 5rem;
    margin-top: 8rem;

    @media (max-width: ${DEVICE.LG}) {
      flex-direction: column;
    }
  }

  .aboutImage {
    img {
      width: 29rem;
      border: solid;
      border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.COLORS.SECUNDARY};

      @media (max-width: ${DEVICE.MD}) {
        width: 22rem;
      }

      @media (max-width: ${DEVICE.SM}) {
        width: 19rem;
      }
    }
  }

  .aboutText {
    width: 50rem;

    @media (max-width: ${DEVICE.MD}) {
      width: 42rem;
    }

    @media (max-width: ${DEVICE.SM}) {
      width: 33rem;
    }

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      line-height: 1.6rem;
    }
  }
`;

import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15rem;

  h1 {
    font-size: 2.5rem;
    text-align: center;
  }

  .aboutMe {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin-top: 8rem;

    @media (max-width: ${DEVICE.LG}) {
      flex-direction: column;
    }
  }

  .aboutImage {
    flex: 1 1 28rem;
    max-width: 30rem;

    img {
      width: 100%;
      max-width: 30rem;
      border: solid;
      border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.COLORS.SECUNDARY};
      border-radius: 1rem;

      @media (max-width: ${DEVICE.SM}) {
        max-width: 30rem;
      }
    }
  }

  .aboutText {
    flex: 1 1 50rem;
    width: 100%;
    max-width: 50rem;
    max-height: 30rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_PRIMARY};
    border: 1px solid ${({ theme }) => theme.COLORS.SECUNDARY};
    box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 1rem;
    padding: 1rem;

    p {
      font-size: clamp(1rem, 2.5vw, 1.2rem);
      margin-bottom: 1.5rem;
      line-height: 1.6;
      word-break: break-word;
    }
  }
`;

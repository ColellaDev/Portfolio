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
  }

  .aboutImage {
    img {
      width: 27rem;
      border: solid;
      border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      box-shadow: 0px 0px 10px 2px ${({ theme }) => theme.COLORS.SECUNDARY};
    }
  }

  .aboutText {
    width: 50rem;

    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      line-height: 1.6rem;
    }
  }
`;

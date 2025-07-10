import styled from "styled-components";
import { DEVICE } from "../../styles/deviceBreakpoints";

export const Hero = styled.div`
  font-size: 1.3rem;
  margin-top: 17rem;
  margin-bottom: 19rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  @media (max-width: ${DEVICE.LG}) {
    margin-bottom: 30rem;
    gap: 3rem;
  }

  @media (max-width: ${DEVICE.MD}) {
    flex-direction: column-reverse;
    gap: 3rem;
    margin-top: 10rem;
  }

  @media (max-width: ${DEVICE.SM}) {
    margin-bottom: 6rem;
  }
`;

export const Welcome = styled.div`
  width: 32rem;

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    margin-top: 1rem;
  }

  p {
    margin-top: 1.5rem;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: ${DEVICE.MD}) {
    justify-content: center;
  }

  .iconLink {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 1.8rem;
    background-color: transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(-4px);
      background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      border-color: ${({ theme }) => theme.COLORS.SECUNDARY};
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
      box-shadow: 0 10px 20px -10px ${({ theme }) => theme.COLORS.SECUNDARY_100};
    }
  }

  .curriculoBtn {
    padding: 0.8rem 2rem;
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    border: 1px solid ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: translateY(1px);
      box-shadow: 0 10px 20px -10px ${({ theme }) => theme.COLORS.SECUNDARY_100};
      background-color: ${({ theme }) => theme.COLORS.SECUNDARY_100};
    }
  }
`;

export const Avatar = styled.div`
  img {
    width: 20rem;
    border-radius: 31% 69% 73% 27% / 35% 58% 42% 65%;
    border: solid;
    box-shadow: 14px 0px 41px 19px rgba(62, 66, 66, 0.22);
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 7rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 8rem;
  }

  .contatos {
    display: flex;
    gap: 20rem;
  }
`;

export const Profile = styled.div`
  p {
    font-size: 1.2rem;
  }
  .info {
    margin-bottom: 3rem;

    h2 {
      margin-bottom: 1rem;
    }

    .contactMe {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.5rem;

      svg {
        font-size: 1.4rem;
      }
    }
  }

  .address {
    margin-bottom: 3rem;

    h2 {
      margin-bottom: 1rem;
    }
  }

  .profiles {
    margin-bottom: 3rem;

    h2 {
      margin-bottom: 1rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: 2rem;
      margin-right: 0.5rem;
    }
  }
`;

export const Form = styled.form`
  .name, .email, .message {
    display: flex;
    width: 22rem;
    margin-bottom: 0.5rem;
    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.SECUNDARY};

    input, textarea {
      width: 100%;
      border: none;
      outline: none;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      background-color: transparent;
      padding: 1rem 0.5rem;
    
    }

    span {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      padding: 1rem;
    }

    .messageIcon {
      align-items: flex-start;
      padding-top: 1rem;
    }
  }

  button {
    cursor: pointer;
    margin-top: 0.5rem;
    width: 5rem;
    height: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.COLORS.SECUNDARY};
    transition: 400ms;

    &:hover {
      color: ${({ theme }) => theme.COLORS.SECUNDARY};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
      box-shadow: 0px 0px 6px 3px ${({ theme }) => theme.COLORS.SECUNDARY};
    }
  }
`;

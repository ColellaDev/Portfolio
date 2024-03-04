import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
  }

  .skillsStyled {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20rem;
    margin-top: 8rem;
  }
`;

export const HardSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30rem;
  gap: 1.5rem;

  .imageContainer {
    position: relative;
  }

  .tooltip {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid;
    border-radius: 1rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 1.1rem;
    opacity: 0;
  }

  .imageContainer:hover .tooltip {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  img {
    width: 4.5rem;
  }
`;

export const Softskills = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: 30rem;
  align-items: center;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};

  li {
    list-style-type: none;
    font-size: 1.3rem;
    margin-bottom: 1.1rem;

    svg {
      font-size: 2rem;
      margin-right: 1rem;
    }
  }
`;

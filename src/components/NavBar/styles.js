import styled from "styled-components"

export const Container = styled.div`
height: 4rem;
padding: 2rem;
font-size: 1.25rem;
display: flex;
justify-content: space-between;
align-items: center;

span {
    color: ${({theme}) => theme.COLORS.SECUNDARY}
}

> h1 {
    
}


> ul {
    list-style: none; 
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 600;
}

`

export const StyledLink = styled.a`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.PRIMARY};



  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    transform: scale(0);
    transform-origin: right;
    transition: transform 0.4s ease-in-out
  }

  &:hover:before{
    transform: scale(1);
    transform-origin: left;
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
  }
  &:hover{
    transition: 0.4s ease-in-out;
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
  }
`;
import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  
  width: 3rem;
  height: 3rem;
  
  border-radius: 50%;
  
  background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000; 
  
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: ${({ $isVisible }) => ($isVisible ? 'scale(1)' : 'scale(0)')};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY_100};
    transform: scale(1.1);
  }
`;

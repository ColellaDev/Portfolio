import styled from "styled-components"

export const Container = styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

h1 {
    font-size: 2.5rem;
}


.projectsCard {
    display: flex;
    margin-top: 8rem;
    gap: 2rem;

    
}

.card {
    background-color: ${({ theme }) => theme.COLORS.CARD};
    width: 21rem;
    height: 25rem;
    display: flex;
    
    flex-direction: column;
    gap: 0.6rem;
    padding: 1rem;
    border: solid;
    border-radius: 1rem;

    img {
        width: 100%;
        height: 55%;;
      
    }

    h3 {
        
    }

    p {
       
    }

}

.links {
    
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    

    a {
    padding: 0.4rem 1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    background-color: ${({ theme }) => theme.COLORS.SECUNDARY};
    border-radius: 1.5rem;
    transition: 400ms;

    &:hover {
    color: ${({ theme }) => theme.COLORS.SECUNDARY};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};  
    
    }
    }
}
`
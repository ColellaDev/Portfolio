import styled from "styled-components"

export const Container = styled.div`
height: 4rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem;

> ul {
    list-style: none; 
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 600;
}
`
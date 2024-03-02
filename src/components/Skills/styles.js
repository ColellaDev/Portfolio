import styled from "styled-components"

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
    gap: 25rem;
    margin-top: 8rem;
}
`

export const HardSkills = styled.div`
display: flex;
flex-wrap: wrap;
width: 32rem;
gap: 2rem;

img {
    width: 4rem;
}
`

export const Softskills = styled.div`
`

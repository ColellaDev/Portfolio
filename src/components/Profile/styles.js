import styled from "styled-components"

export const Container = styled.div`
margin-top: 5rem;
font-size: 1.3rem;

display: flex;
justify-content: center;
align-items: center;
gap: 20rem;
`


export const About = styled.div`
 width: 32rem;

 h2  {
    margin-top: 1rem;
 }

  span {
    color: ${({theme}) => theme.COLORS.SECUNDARY};
 }

  p {
    margin-top: 1rem;
 }


`

export const Avatar = styled.div`

 img {
   width: 20rem;
   
   border-radius: 31% 69% 73% 27% / 35% 58% 42% 65%  ;
   border-color: ${({theme}) => theme.COLORS.PRIMARY};
   border: solid;

   
}
`
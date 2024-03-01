import { Container, Hero, About, Links, Avatar, TopBlur, BottomBlur } from "./styles"
import { useTheme } from "styled-components"
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import avatarDark from "../../assets/avatarDark.png"
import avatarLight from "../../assets/avatarLight.png"
import curriculo from "../../assets/CurriculoMarcosColella.pdf"



export function Profile() {

    const { TITLE } = useTheme()

    return(
        <Container id="Profile">
            <Hero>
                <About>
                 <h4>Olá,  eu sou</h4>
                 <h2>Marcos Colella</h2>
                 <h3><span>Desenvolvedor Front End</span></h3>
                 <p>
                 Crio interfaces responsivas para diversos dispositivos aplicando conceitos de clean code
                  e reutilização de código.
                 </p>
                
                <Links>
                <a className="curriculoBtn" href={curriculo} download="CurrículoMarcosColella.pdf">Download CV</a>

                 <a className="iconLink" href="https://www.linkedin.com/in/marcos-colella-esteves-952a3866/" target="_blank"><CiLinkedin /></a>
                 <a className="iconLink" href="https://github.com/ColellaDev" target="_blank"><AiOutlineGithub /></a>
                 <a className="iconLink" href="mailto:marcos.colella@gmail.com" target="_blank"><AiOutlineMail /></a>
                </Links>
                
                </About>


                 <Avatar>
                { TITLE == "dark" ? 
                  <img src={avatarDark} alt="Foto Perfil Marcos Colella"/> :
                  <img src={avatarLight} alt="Foto Perfil Marcos Colella"/>
                }
                 </Avatar>
            </Hero>
            
            <TopBlur background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgba(25, 55, 109, 0.2)"} />
            <BottomBlur background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgba(25, 55, 109, 0.2)"} />

        </Container>
    )
}
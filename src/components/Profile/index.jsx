import { Hero, Welcome, Links, Avatar } from "./styles"
import { useTheme } from "styled-components"
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import avatarDark from "../../assets/avatarDark.png"
import avatarLight from "../../assets/avatarLight.png"
import curriculo from "../../assets/CurriculoMarcosColella.pdf"
import { ReactTyped } from "react-typed";
import { Slide } from "react-awesome-reveal";

export function Home() {

    const { TITLE } = useTheme()

    return(
         <Hero id="Home">

            <Slide direction="left">
                 <Welcome>
                     <h4>Olá,  eu sou</h4>
                     <h2>Marcos Colella</h2>

                     <ReactTyped
                        strings={[
                        "Desenvolvedor Front End",
                        "Apaixonado por programação"
                         ]}
                         typeSpeed={60}
                         backSpeed={35}
                         loop
                     />
                 
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
                </Welcome>
             </Slide>
                
            <Slide direction="right">
                <Avatar>
                     { TITLE == "dark" ? 
                      <img src={avatarLight} alt="Foto Perfil Marcos Colella"/> :
                      <img src={avatarDark} alt="Foto Perfil Marcos Colella"/>
                     }
                </Avatar>
            </Slide>

        </Hero> 
    )
}
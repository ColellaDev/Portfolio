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
                        "Desenvolvedor FullStack",
                        "Apaixonado por programação"
                         ]}
                         typeSpeed={60}
                         backSpeed={35}
                         loop
                     />
                 
                     <p>
                      Desenvolvedor FullStack focado em criar experiências de usuário fluidas e responsivas. Tenho
                      experiência na construção de aplicações web modernas, desde a implementação de designs até a
                      integração com APIs RESTful, sempre buscando as melhores práticas para um código limpo e escalável.
                     </p>
                
                       <Links>
                         <a className="curriculoBtn" href={curriculo} download="Currículo Marcos Colella.pdf">Download CV</a>

                         <a className="iconLink" href="https://www.linkedin.com/in/marcoscolella/" target="_blank"><CiLinkedin /></a>
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
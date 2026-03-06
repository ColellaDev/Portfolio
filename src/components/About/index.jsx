import { Container } from "./styles"
import {Zoom, Slide} from "react-awesome-reveal";
import { useTheme } from "styled-components"
import aboutImage from "../../assets/aboutImage.jpg"
import aboutImage2 from "../../assets/aboutImage2.jpg"


export function About() {

    const { TITLE } = useTheme()

    return (
        <Container id="About">

            <h1>Sobre</h1>

            <div className="aboutMe">

                <div className="aboutImage">
                     <Slide direction="left">
                    {
                        TITLE == "dark" ? 
                        <img src={aboutImage}
                         alt="Imagem de uma mesa com um Computador, um livro e um controle de video game"/> :
                         <img src={aboutImage2}
                         alt="Imagem de uma mesa com um Computador, um livro e um controle de video game"/>
                    }
                    
                     </Slide>
                </div>

                
                <div className="aboutText">
                    <Zoom cascade="true" duration="700">
                    <p>
                    Sou <span>formado em Sistemas de Informação</span> e atualmente atuo como
                    <span> Desenvolvedor Front-End</span>, trabalhando no desenvolvimento de uma aplicação
                    web de gerenciamento comercial. Minha jornada até a tecnologia passou por áreas
                    como marketing e gestão, experiências que contribuíram para desenvolver
                    habilidades importantes como <span>comunicação</span>, <span>organização</span> e
                     <span> trabalho em equipe</span>.
                    </p>
                    <p>
                    Minha stack principal é <span>React</span>, <span>TypeScript</span>, <span>Next.js</span> e <span>React Native</span>. Tenho experiência no
                    desenvolvimento de interfaces responsivas, consumo de APIs RESTful, gerenciamento de estado,
                     utilização de hooks, metodologias ágeis (Scrum), noções de UX/UI e uso do Figma,
                    versionamento com Git e aplicação de boas práticas para construção de
                    <span> código limpo, escalável e de alta performance</span>.
                    </p>
                    <p>
                    Hoje meu foco é <span>continuar evoluindo</span> como desenvolvedor, ampliando meus conhecimentos
                    tanto no front-end quanto no back-end e contribuindo para a construção de
                    produtos digitais de qualidade.
                    </p>
                    </Zoom>
                </div>
                

            </div>



        </Container>
    )
}
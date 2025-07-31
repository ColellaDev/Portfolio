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
                    Sou <span>formado em Sistemas de Informação</span> e, após anos atuando em áreas como marketing e gestão,
                    decidi seguir minha verdadeira vocação e migrei para o desenvolvimento de software, unindo minha
                    paixão por tecnologia à experiência em <span>comunicação</span>, <span>organização</span> e <span>trabalho em equipe</span>.
                    </p>
                    <p>
                    Minha stack principal é <span>React</span>, <span>TypeScript</span>, <span>Next.js</span> e <span>React Native</span>. Tenho experiência no
                    desenvolvimento de interfaces responsivas, consumo de APIs RESTful, gerenciamento de estado com
                    Context API, utilização de hooks, metodologias ágeis (Scrum), noções de UX/UI e uso do Figma,
                    versionamento com Git e aplicação de boas práticas para um código limpo e escalável.
                    </p>
                    <p>
                    Desenvolvi diversos projetos práticos, concluí cursos e formações e sigo me atualizando
                    constantemente. Atualmente, busco uma posição como <span>Desenvolvedor Júnior</span>.
                    </p>
                    </Zoom>
                </div>
                

            </div>



        </Container>
    )
}
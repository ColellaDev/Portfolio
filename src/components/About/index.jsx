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
                     Sou <span>bacharel em Sistemas de Informação</span> e sempre fui apaixonado por tecnologia e programação.
                     Apesar de ter seguido por outros caminhos profissionais, recentemente fiz uma transição de carreira para seguir minha verdadeira vocação.
                    </p>
                    <p>
                    Minha trajetória profissional me proporcionou uma ampla <span>vivência</span>, trabalhei em diversas equipes, interagi com clientes de diferentes perfis
                     e enfrentei desafios que exigiam soluções urgentes e eficazes. Essas experiências me permitiram aprimorar <span>habilidades essenciais</span> para um Desenvolvedor.
                    </p>
                    <p>
                    Adquiri experiência através de diversos projetos, cursos e formações, minha stack principal é <span>React</span>, <span>Styled Components</span> e <span>NodeJS</span>,
                     mas estou sempre em busca de novas tecnologias, atualmente procuro uma posição como Desenvolvedor Front End Junior.
                    </p>
                    </Zoom>
                </div>
                

            </div>



        </Container>
    )
}
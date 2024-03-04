import  { Container } from "./styles"
import {Zoom} from "react-awesome-reveal";

import projects from "../../data/projects.json"

export function Projects() {

    const getImageUrl = (path) => {
        return new URL(`../../assets/${path}`, import.meta.url).href;
      };

    return (
        <Container id="Projects">

         <h1>Projetos</h1>

         <div className="projectsCard">
            <Zoom >
            {
                projects.map((projects, id) => {
                    return (
                        <div className="card" key={id}>
                            <img src={getImageUrl(projects.imageSrc)} alt={`Imagem do Projeto ${projects.title}`}/>
                            <h3>{projects.title}</h3>
                            <p>{projects.description}</p>
                            <div className="links">
                                <a href={projects.demo} target="_blank">Demo</a>
                                <a href={projects.code} target="_blank">Código</a>
                            </div>
                        </div>
                    )
                })
               
            }
            </Zoom>
         </div>

        </Container>
    )
}
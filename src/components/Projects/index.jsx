import  { Container } from "./styles"

import projects from "../../data/projects.json"

export function Projects() {

    const getImageUrl = (path) => {
        return new URL(`../../assets/${path}`, import.meta.url).href;
      };

    return (
        <Container id="Projects">

         <h1>Projetos</h1>

         <div>
            {
                projects.map((projects, id) => {
                    return (
                        <div key={id}>
                            <img src={getImageUrl(projects.imageSrc)} alt={`Imagem do Projeto ${projects.title}`}></img>
                            <h3>{projects.tile}</h3>
                            <p>{projects.description}</p>
                            <div>
                                <a href={projects.demo}>Demo</a>
                                <a href={projects.code}>Código</a>
                            </div>
                        </div>
                    )
                })
            }
         </div>

        </Container>
    )
}
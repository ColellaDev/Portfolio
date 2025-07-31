import  { Container } from "./styles"
import {Zoom, Slide} from "react-awesome-reveal";
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";

import projects from "../../data/projects.json"
import projectsMobile from "../../data/projectsMobile.json"
import featuredProject from "../../data/featuredProject.json"

export function Projects() {

    useEffect(() => {
        const tiltElements = document.querySelectorAll('[data-tilt]');
        tiltElements.forEach(element => {
            VanillaTilt.init(element, {
                max: 8,
                speed: 300,
                glare: true,
                'max-glare': 0.3,
                scale: 1.1
            });
        });
    }, []);

    const getImageUrl = (path) => {
        return new URL(`../../assets/${path}`, import.meta.url).href;
    };

    return (
        <Container id="Projects">

         <h1>Projetos</h1>

         <div className="featured-project">
            <Slide direction="left" duration={800}>
                <div className="featured-image">
                    <a href={featuredProject.demo} target="_blank">
                        <img src={getImageUrl(featuredProject.imageSrc)} alt={`Imagem do Projeto ${featuredProject.title}`} />
                    </a>
                </div>
            </Slide>
            <Slide direction="right" duration={800}>
                <div className="featured-details">
                    <span className="featured-tag">Projeto em Destaque</span>
                    <h3>{featuredProject.title}</h3>
                    <p className="long-description">{featuredProject.longDescription}</p>
                    
                    <h4>Desafios:</h4>
                    <ul>
                        {featuredProject.challenges.map((challenge, id) => (
                            <li key={id}><FaCheckCircle color="#4ECA64"/> {challenge}</li>
                        ))}
                    </ul>

                    <div className="techs">
                        {featuredProject.techs.map((tech, id) => (
                            <span className="tech-tag" key={id}>{tech}</span>
                        ))}
                    </div>
                    <div className="links">
                        <a href={featuredProject.code} target="_blank">Código</a>
                    </div>
                </div>
            </Slide>
        </div>

         <h2>Web</h2>

         <div className="projectsCard" >   
            {
            projects.map((projects, id) => {
                return (
                    <Zoom key={id}>
                    <div className="card"  data-tilt>
                            
                        <img src={getImageUrl(projects.imageSrc)} alt={`Imagem do Projeto ${projects.title}`}/>
                        <h3>{projects.title}</h3>
                        <p>{projects.description}</p>
                         {projects.techs && (
                         <div className="techs">
                            {projects.techs.map((tech, id) => (
                                <span className="tech-tag" key={id}>
                                    {tech}
                                </span>
                            ))}
                         </div>
                         )}
                        <div className="links">
                            <a href={projects.demo} target="_blank">Demo</a>
                            <a href={projects.code} target="_blank">Código</a>
                        </div>
                     </div>
                    </Zoom>
                )
            })
            }
         
         </div>

         <h2>Mobile</h2>

        <div className="projectsCard" >   
            {
            projectsMobile.map((projectsMobile, id) => {
                return (
                <Zoom key={id}>
                <div className="cardMobile"  data-tilt>
               
                    <div className="imgMobile">
                        <img src={getImageUrl(projectsMobile.imageSrc1)} alt={`Imagem do Projeto ${projectsMobile.title}`}/>
                        <img src={getImageUrl(projectsMobile.imageSrc2)} alt={`Imagem do Projeto ${projectsMobile.title}`}/>
                        <img src={getImageUrl(projectsMobile.imageSrc3)} alt={`Imagem do Projeto ${projectsMobile.title}`}/>
                    </div>

                    <h3>{projectsMobile.title}</h3>
                    <p>{projectsMobile.description}</p>
                    {projectsMobile.techs && (
                        <div className="techs">
                            {projectsMobile.techs.map((tech, id) => (
                                <span className="tech-tag" key={id}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="links">
                        <a href={projectsMobile.code} target="_blank">Código</a>
                    </div>
                </div>
                </Zoom>
                )
            })
            }
        </div>

        </Container>
    )
}
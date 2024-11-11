import  { Container } from "./styles"
import {Zoom} from "react-awesome-reveal";
import VanillaTilt from 'vanilla-tilt';
import React, { useEffect } from 'react';

import projects from "../../data/projects.json"
import projectsMobile from "../../data/projectsMobile.json"

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
                    <div className="card"  data-tilt>
                            
                        <img src={getImageUrl(projectsMobile.imageSrc)} alt={`Imagem do Projeto ${projectsMobile.title}`}/>
                        <h3>{projectsMobile.title}</h3>
                        <p>{projectsMobile.description}</p>
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
import  { Container, HardSkills, Softskills } from "./styles"
import { RiTeamFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";
import { useEffect } from "react";
import VanillaTilt from 'vanilla-tilt';

import skills from "../../data/skills.json"

export function Skills() {

    useEffect(() => {
        const tiltElements = document.querySelectorAll('[data-tilt]');
        tiltElements.forEach(element => {
            VanillaTilt.init(element, {
                max: 20,
                speed: 400,
                glare: true,
                'max-glare': 0.3,
                scale: 1.05
            });
        });
    }, []);

    return (
        <Container id="Skills">

            <h1>Skills</h1>

            <div className="skillsStyled">
            
                <HardSkills>
                  <Zoom cascade="true" duration="400">
                   {
                      skills.map((skill, id) => {
                        return ( 
                          <div className="skill-card" key={id} data-tilt>
                             <img src={skill.imageSrc} alt={skill.title}/>
                             <span>{skill.title}</span>
                          </div>
                        )
                       })
                   } 
                  </Zoom>
                </HardSkills>
           
                <Softskills>
                  <Zoom cascade="true" duration="700">
                     <ul>
                        <li>
                         <RiTeamFill /> Trabalho em equipe
                         </li>
                         <li>
                         <BsTools /> Resolução de problemas
                         </li>
                         <li>
                         <IoIosChatbubbles /> Comunicação Colaborativa
                         </li>
                         <li>
                         <MdTimer /> Gestão de tempo
                         </li>
                         <li>
                         <BsFillCalendarCheckFill />Cumprimento de prazos
                         </li>
                     </ul>
                     </Zoom>
                 </Softskills>

             </div>
          
        </Container>
    )
}
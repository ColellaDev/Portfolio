import  { Container, HardSkills, Softskills } from "./styles"
import { RiTeamFill } from "react-icons/ri";
import { BsTools } from "react-icons/bs";
import { IoIosChatbubbles } from "react-icons/io";
import { MdTimer } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";

import skills from "../../data/skills.json"

export function Skills() {

    return (
        <Container id="Skills">

            <h1>Skills</h1>

            <div className="skillsStyled">

            <HardSkills>{
                skills.map((skills, id) => {
                    return <div className="imageContainer" key={id}>
                        <div><img src={skills.imageSrc} alt={skills.title}/></div>
                        <div className="tooltip">{skills.title}</div>
                    </div>
                })
                }
             </HardSkills>

             <Softskills>
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
             </Softskills>

             </div>
            
          
        </Container>
    )
}
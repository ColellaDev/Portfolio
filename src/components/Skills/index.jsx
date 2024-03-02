import  { Container, HardSkills, Softskills } from "./styles"

import skills from "../../data/skills.json"


export function Skills() {

    return (
        <Container id="Skills">

            <h1>Skills</h1>

            <div className="skillsStyled">

            <HardSkills>{
                skills.map((skills, id) => {
                    return <div key={id}>
                        <div><img src={skills.imageSrc} alt={skills.title}/></div>
                    </div>
                })
                }
             </HardSkills>

             <Softskills>
                <h3>Trabalho em equipe</h3>
                <h3>Comunicação</h3>
                <h3>Gestão de tempo</h3>
                <h3>Trabalho em equipe</h3>
             </Softskills>

             </div>
            
          
        </Container>
    )
}
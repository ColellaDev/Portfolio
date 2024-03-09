import { HomeLeft, HomeRight, SkillsLeft, ProjectsRight, ProjectsLeft, ContactRight, ContactLeft, FinalLeft } from './styles';
import { useTheme } from "styled-components"

export function Blur() {

    const { TITLE } = useTheme()

    return (
     <>
     <HomeLeft background={TITLE === "dark" ? "#1d2333" : "rgb(232, 223, 255)"} />
     <HomeRight background={TITLE === "dark" ? "#212a42" : "rgb(221, 208, 255)"} />
     <SkillsLeft  background={TITLE === "dark" ? "#1d2333" : "rgb(233, 224, 255)"}/>
     <ProjectsRight  background={TITLE === "dark" ? "#1d2333" : "rgb(230, 220, 255)"}/>
     <ProjectsLeft  background={TITLE === "dark" ? "#1c2642" : "rgb(221, 208, 255)"}/>
     <ContactRight  background={TITLE === "dark" ? "#1d2333" : "rgb(230, 220, 255)"}/>
     <ContactLeft  background={TITLE === "dark" ? "#1c2642" : "rgb(221, 208, 255)"}/>
     <FinalLeft  background={TITLE === "dark" ? "#1c2642" : "rgb(221, 208, 255)"}/>
     </>
    )

    //"rgba(25, 55, 109, 1)"
}
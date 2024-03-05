import { HomeLeft, HomeRight, SkillsLeft, ProjectsRight, ProjectsLeft } from './styles';
import { useTheme } from "styled-components"

export function Blur() {

    const { TITLE } = useTheme()

    return (
     <>
     <HomeLeft background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgb(221, 208, 255)"} />
     <HomeRight background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgb(221, 208, 255)"} />
     <SkillsLeft  background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgb(221, 208, 255)"}/>
     <ProjectsRight  background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgb(221, 208, 255)"}/>
     <ProjectsLeft  background={TITLE === "dark" ? "rgba(25, 55, 109, 1)" : "rgb(221, 208, 255)"}/>
     </>
    )
}
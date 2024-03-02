import styled from "styled-components"



export const HomeLeft = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vw;
  min-width: 350px;
  top: -128px;
  left: -10vw;
  border-radius: 764px;
  background: ${({ background }) => background};
  filter: blur(100px);
  z-index: -1;
`

export const HomeRight = styled.div`
  position: absolute;
  width: 70vw;
  height: 50vw;
  min-width: 350px;
  top: 246px;
  right: -25vw;
  border-radius: 764px;
  background: ${({ background }) => background};
  filter: blur(100px);
  z-index: -1;
`

export const SkillsLeft = styled.div`
  position: absolute;
  width: 50vw;
  height: 25vw;
  min-width: 350px;
  top: 1200px;
  left: 6vw;
  border-radius: 764px;
  background: ${({ background }) => background};
  filter: blur(100px);
  z-index: -1;
`

export const ProjectsRight = styled.div`
  position: absolute;
  width: 70vw;
  height: 50vw;
  min-width: 350px;
  top: 1700px;
  right: -25vw;
  border-radius: 764px;
  background: ${({ background }) => background};
  filter: blur(100px);
  z-index: -1;
`
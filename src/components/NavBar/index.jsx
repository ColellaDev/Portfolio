import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Container, StyledLink } from './styles';
import { useTheme } from "styled-components"
import { ThemeContext } from '../../styles/theme';

export function NavBar() {
const { TITLE, COLORS } = useTheme()
const {toggleTheme} = useContext(ThemeContext)

  return (
    <Container>

      <h1><span>{"{ "}</span>Marcos Colella<span>{" }"}</span></h1>  
      <ul>
        <li><StyledLink href="#Home">Home</StyledLink></li>
        <li><StyledLink href="#Profile">Profile</StyledLink></li>
        <li><StyledLink href="#Skills">Skills</StyledLink></li>
        <li><StyledLink href="#Projetos">Projetos</StyledLink></li>
        <li><StyledLink href="#Contato">Contato</StyledLink></li>
      </ul>
      
      <Switch
        onChange={toggleTheme}
        checked={TITLE == "light"}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={20}
        offHandleColor='#969696'
        offColor={COLORS.PRIMARY}
        onColor={COLORS.PRIMARY}
      />
    </Container>
  );
}
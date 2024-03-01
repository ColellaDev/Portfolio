import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Container, StyledLink } from './styles';
import { useTheme } from "styled-components"
import { ThemeContext } from '../../styles/theme';
import { Link as ScrollLink } from 'react-scroll';

export function NavBar() {
const { TITLE, COLORS } = useTheme()
const {toggleTheme} = useContext(ThemeContext)

  return (
    <Container>

      <h1><span>{"{ "}</span>Marcos Colella<span>{" }"}</span></h1>  
      <ul>
        <li><ScrollLink to="Home" smooth={true} offset={-250} duration={500}><StyledLink>Home</StyledLink></ScrollLink></li>
        <li><ScrollLink to="Skills" smooth={true} offset={-150} duration={500}><StyledLink>Skills</StyledLink></ScrollLink></li>
        <li><StyledLink>Projetos</StyledLink></li>
        <li><StyledLink>Contato</StyledLink></li>
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
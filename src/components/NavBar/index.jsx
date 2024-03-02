import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Container } from './styles';
import { useTheme } from "styled-components"
import { ThemeContext } from '../../styles/theme';
import { Link as ScrollLink } from 'react-scroll';
import { FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";

export function NavBar() {
const { TITLE, COLORS } = useTheme()
const {toggleTheme} = useContext(ThemeContext)

  return (
    <Container>

      <h1><span>{"{ "}</span>Marcos Colella<span>{" }"}</span></h1>  
      <ul>
        <li><ScrollLink to="Home" smooth={true} offset={-250} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="Skills" smooth={true} offset={-150} duration={500}>Skills</ScrollLink></li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
      
      <Switch
        onChange={toggleTheme}
        checked={TITLE == "light"}
        height={22}
        width={45}
        handleDiameter={20}

        checkedIcon={<FiMoon />}
        uncheckedIcon={<IoSunny color="yellow"/>}
        
        offHandleColor={COLORS.PRIMARY}
        onHandleColor={COLORS.SECUNDARY}

        onColor={COLORS.GRAY}
        offColor={COLORS.GRAY}
      />

    </Container>
  );
}
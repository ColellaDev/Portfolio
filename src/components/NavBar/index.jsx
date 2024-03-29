import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { Container, Menu } from './styles';
import { useTheme } from "styled-components"
import { ThemeContext } from '../../styles/theme';
import { Link as ScrollLink } from 'react-scroll';
import { FiMoon } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

export function NavBar() {
const { TITLE, COLORS } = useTheme()
const {toggleTheme} = useContext(ThemeContext)

const [isMenuVisible, setIsMenuVisible] = useState(false);

const toggleMenu = () => {
  setIsMenuVisible(!isMenuVisible);
};

  return (
    <Container>

      <h1><span>{"{ "}</span>Marcos Colella<span>{" }"}</span></h1>  
      
      <ul className={isMenuVisible ? "menu-visible" : "menu-hidden"}>
        <li><ScrollLink to="Home" smooth={true} offset={-320} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="About" smooth={true} offset={-180} duration={500}>Sobre</ScrollLink></li>
        <li><ScrollLink to="Skills" smooth={true} offset={-180} duration={500}>Skills</ScrollLink></li>
        <li><ScrollLink to="Projects" smooth={true} offset={-180} duration={500}>Projetos</ScrollLink></li>
        <li><ScrollLink to="Contact" smooth={true} offset={-190} duration={500}>Contatos</ScrollLink></li>
      </ul>
    
      <Switch className='switch'
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

       <Menu>
          <IoMdMenu onClick={() =>{toggleMenu()}}/>
       </Menu>
 
    </Container>
  );
}
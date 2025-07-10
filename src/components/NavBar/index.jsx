import { useContext, useState } from 'react';
import Switch from 'react-switch'
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
const [activeSection, setActiveSection] = useState("Home");
const handleSetActive = (section) => {
  setActiveSection(section);
};
const toggleMenu = () => {
  setIsMenuVisible(!isMenuVisible);
};

  return (
    <Container>

      <h1><span>{"{ "}</span>Marcos Colella<span>{" }"}</span></h1>  
      
      <ul className={isMenuVisible ? "menu-visible" : "menu-hidden"}>
        <li><ScrollLink to="Home" spy={true} smooth={true} offset={-320} duration={500} activeClass="active">Home</ScrollLink></li>
        <li><ScrollLink to="About" spy={true} smooth={true} offset={-150} duration={500} activeClass="active">Sobre</ScrollLink></li>
        <li><ScrollLink to="Skills" spy={true} smooth={true} offset={-150} duration={500} activeClass="active">Skills</ScrollLink></li>
        <li><ScrollLink to="Projects" spy={true} smooth={true} offset={-140} duration={500} activeClass="active">Projetos</ScrollLink></li>
        <li><ScrollLink to="Contact" spy={true} smooth={true} offset={-220} duration={500} activeClass="active" >Contatos</ScrollLink></li>
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
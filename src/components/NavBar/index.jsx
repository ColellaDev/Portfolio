import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Container } from './styles';
import { useTheme } from "styled-components"
import { ThemeContext } from '../../styles/theme';

export function NavBar() {
const { TITLE, COLORS } = useTheme()
const {toggleTheme} = useContext(ThemeContext)

  return (
    <Container>

      <h1>Marcos Colella</h1>  
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Projetos">Projetos</a></li>
        <li><a href="#Contato">Contato</a></li>
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
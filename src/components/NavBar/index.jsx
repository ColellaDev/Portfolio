import React from 'react';
import Switch from 'react-switch';
import { Container } from './styles';
import { ThemeContext } from "styled-components"
import { useContext } from 'react';

export function NavBar({ toggleTheme }) {
  
const { TITLE, COLORS } = useContext(ThemeContext)

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
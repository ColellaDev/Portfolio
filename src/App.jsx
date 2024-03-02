import React from 'react';
import { Container } from "./styles"
import { NavBar } from './components/NavBar';
import { Home } from './components/Profile';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blur } from "./components/Blur"

export function App() {
  return (
    <Container>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Blur/>
    </Container>
  );
}
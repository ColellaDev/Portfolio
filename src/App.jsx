import React from 'react';
import { Container } from "./styles"
import { NavBar } from './components/NavBar';
import { Home } from './components/Profile';
import { Skills } from './components/Skills';

export function App() {
  return (
    <Container>
      <NavBar/>
      <Home/>
      <Skills/>
    </Container>
  );
}
import React from 'react';
import { Container } from "./styles"
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';
import { Skills } from './components/Skills';

export function App() {
  return (
    <Container>
      <NavBar/>
      <Profile/>
      <Skills/>
    </Container>
   
  );
}
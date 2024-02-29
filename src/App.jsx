import React from 'react';
import { Container } from "./styles"
import { NavBar } from './components/NavBar';
import { Profile } from './components/Profile';

export function App() {
  return (
    <Container>
      <NavBar/>
      <Profile/>
    </Container>
   
  );
}
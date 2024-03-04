import React from 'react';

import { NavBar } from './components/NavBar';
import { Home } from './components/Profile';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blur } from "./components/Blur"

export function App() {
  return (
      <>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Blur/>
      </>
  );
}
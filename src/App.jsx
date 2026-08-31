import React from 'react';

import { NavBar } from './components/NavBar';
import { Home } from './components/Profile';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Blur } from "./components/Blur"
import { BackToTopButton } from './components/BackToTopButton';

export function App() {
  return (
      <>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Blur/>
      <BackToTopButton />
      </>
  );
}
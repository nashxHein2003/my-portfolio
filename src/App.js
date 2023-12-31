import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skill from './components/Skill';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Skill />
        <About />
        <Project />
      </main>
    </div>
  );
}

export default App;

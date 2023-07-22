import logo from './logo.svg';
import React from "react";
import Navbar from "./Parts/Navbar";
import About from "./Parts/About";
import Skill from "./Parts/Skill";
import Project from "./Parts/Project";
import Footer from "./Parts/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Skill />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Footer />
    </Router>
  );
}

export default App;

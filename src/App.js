import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Formacao from './contents/Formacao';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/formacao">
    <Formacao />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
  

import React from "react";
// import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="text-gray-400 bg-orange-50 body-font">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </div>

  );
}

export default App;

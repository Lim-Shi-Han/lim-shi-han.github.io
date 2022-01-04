import './App.css';
import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Education from "./components/Education"
import Skills from "./components/Skills"
import Others from "./components/Others";
import Footer from "./components/Footer";

class App extends React.Component {
  render(){
    return (
    <div className="App">
        
        <Header />
        
        <Main />

        <About />

        <Education />

        <Skills />

        <Others />

        <Footer />
    </div>
    );
  }
}

export default App;

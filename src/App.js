import React, { Component } from 'react';
import './app.css'

import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Features from './components/Features/Features';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Features/>
      </div>
    );
  }
}

export default App;

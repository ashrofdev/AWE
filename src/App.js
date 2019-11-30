import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css'
import './app.css'

import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About/>
        <Features/>
        <Portfolio/>
        <Clients/>
      </div>
    );
  }
}

export default App;

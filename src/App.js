import React, { Component } from 'react';
import './app.css'

import { firebaseDB } from './Server';

import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';



class App extends Component {

  componentDidMount(){
    firebaseDB.ref('clients').once('value').then((snapshot)=>{
      snapshot.forEach(e=>{
        this.state.clients.push(e.val())
        console.log(this.state.clients)
      })
      
    })
  }
  state = {
    clients: []
  }
  render() {
    
    return (
      <div className="App">
        <Nav/>
        <Header scrollto="header"/>
        <About scrollto="about"/>
        <Features/>
        <Portfolio scrollto="portfolio"/>
        <Clients/>
        <Contact scrollto="contact"/>
        <Footer/>
      </div>
    );
  }
}

export default App;

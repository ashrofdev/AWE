import React, { Component } from 'react';
// import 'font-awesome/css/font-awesome.min.css'
import './app.css'
import {firebaseDB} from './Server'

import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';



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
        <Header/>
        <About/>
        <Features/>
        <Portfolio/>
        <Clients/>
        <Contact/>
      </div>
    );
  }
}

export default App;

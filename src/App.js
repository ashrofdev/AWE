import React, { Component } from 'react';
import './app.css'

import { firebaseDB } from './Server';
import { scroller } from 'react-scroll'

import Header from './components/Header/Header';
import About from './components/AboutMe/About';
import Features from './components/Features/Features';
import Portfolio from './components/Portfolio/Portfolio';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Jobs from './components/Jobs/Jobs';


class App extends Component {
  state = {
      clients: [],
      password: 'pass'
  }
  async componentDidMount(){
    const clients = []
    await firebaseDB.ref('clients').once('value').then((snapshot)=>{
      snapshot.forEach(e=>{
        clients.push(e.val())
      })
      
    })
    this.setState({clients: clients})

  }
  authenticate = () => {
    console.log('222')
    const pass = prompt('ENTER PASSWORD')
    if (pass === this.state.password) {
        scroller.scrollTo('jobs', {
            duration: 1000,
            delay: 0,
            smooth: true
        })
    } else {
      alert('wrong password')
    }
  }

  
  render() {
    
    return (
      <div className="App">
        <Nav authenticate={this.authenticate}/>
        <Header/>
        <About />
        <Features/>
        <Portfolio />
        <Clients/>
        <Contact />
        <Jobs clients={this.state.clients} />
        <Footer/>
      </div>
    );
  }
}

export default App;

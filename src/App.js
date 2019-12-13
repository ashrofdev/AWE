import React, { Component } from 'react';
import './app.css'

import { firebaseDB, storage } from './Server';
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
      projects: [],
      password: 'timi0717'
  }
  async componentDidMount(){
    const clients = []
    const projects = []
    await firebaseDB.ref('clients').once('value').then((snapshot)=>{
      snapshot.forEach(e=>{
        clients.push(e.val())
      })
      
    })
    await firebaseDB.ref('projects').once('value', snapshot =>{
      snapshot.forEach(e=>{
        projects.push(e.val())
      })
    })
    this.setState({
      clients,
      projects
    })
    console.log(this.state.projects)

  }
  authenticate = () => {
    console.log('222')
    const pass = prompt('ENTER PASSWORD')
    if (pass === this.state.password) {
        document.querySelector('.jobs').classList.add('show')
        scroller.scrollTo('jobs', {
            duration: 1000,
            delay: 0,
            smooth: true
        })
    } else {
      alert('wrong password')
    }
  }


  async upload (file){
    console.log(file.target.files[0])
    const num  = Math.floor(Math.random() * Math.floor(100))
    await storage.ref(`project ${num}`).put(file.target.files[0])

    storage.ref(`project ${num}`).getDownloadURL().then(url=>{
        firebaseDB.ref('projects').push().set({
            url: url
        })
        console.log(url)
    })
    

    

  }
  
  render() {
    
    return (
      <div className="App">
        <Nav authenticate={this.authenticate}/>
        <Header/>
        <About />
        <Features/>
        <Portfolio projects={this.state.projects} />
        <Clients/>
        <Contact />
        <Jobs upload={this.upload} clients={this.state.clients} />
        <Footer/>
      </div>
    );
  }
}

export default App;

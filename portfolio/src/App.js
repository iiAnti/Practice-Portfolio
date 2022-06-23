import React, { Component } from 'react'
import Heading from './Components/Heading'
import Navigation from './Components/Navigation'
import Mid from './Components/Mid'
import Bio from './Components/Bio'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
// import Load from './Components/Load'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      welcome:["Welcome to my page","What brings you here?","Were yo looking for me?", "Maybe I've been looking for you"],
      count: 0
    }
  }

  handleChange = () => {
    let changHead = Math.floor(Math.random() * this.state.welcome.length)
    
      this.setState({count: changHead})
  }
 
  render() {
    return (
      <>
      
      
        {/* <div className='head' id='top' onMouseOver={this.handleChange} >
        <Heading 
        heading = {this.state.welcome}
        counter = {this.state.count}
        /> */}
        {/* <button  onClick={this.handleChange}>hover</button> */}
        {/* </div> */}
        {/* <Load end={this.end}/> */}
        <Navigation/>
        {/* <div id='seperate'> */}
        {/* <Mid /> */}
        {/* <Bio /> */}
        {/* <Skills /> */}
        <br/>
        <br/>
        <Footer />
        {/* </div> */}
       
      </>
    )
  }
}


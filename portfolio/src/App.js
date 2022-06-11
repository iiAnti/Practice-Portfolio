import React, { Component } from 'react'
import Heading from './Components/Heading'
import Navigation from './Components/Navigation'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      welcome:["Welcome to my page","What brings you here?","Were yo looking for me?", "Maybe I've been looking for you","THIS IS ME"],
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
      
      <div>
        <div className='head'>
        <Heading 
        heading = {this.state.welcome}
        counter = {this.state.count}
        />
        <button  onClick={this.handleChange}>hover</button>
        </div>
        <Navigation/>
       </div>
      </>
    )
  }
}


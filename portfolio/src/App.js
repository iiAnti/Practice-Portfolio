import React, { Component } from 'react'
import Heading from './Components/Heading'
import Navigation from './Components/Navigation'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      welcome: "Welcome to my page",
      hello: "hello"
    }
  }



  render() {
    return (
      <>
      
      <div>
        <Heading 
        difHeading = {this.state.welcome}
        hello = {this.state.hello}
        />
        <Navigation/>
       </div>
      </>
    )
  }
}


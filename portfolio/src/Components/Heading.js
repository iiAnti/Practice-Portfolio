import React, { Component } from 'react'

export default class Heading extends Component {


    nameChange(){
    this.setState({hello:this.props.difHeading})
}


  render() {
    return (
      <>
      <h1 className='head' onClick={this.nameChange}>{this.props.hello}</h1>
      </>
    )
  }
}

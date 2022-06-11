import React, { Component } from 'react'

export default class Heading extends Component {


  render() {
    return (
      <>
      <h1>{`${this.props.heading[this.props.counter]}`}</h1>
      </>
    )
  }
}

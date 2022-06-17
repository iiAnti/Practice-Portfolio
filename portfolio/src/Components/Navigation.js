import React, { Component } from 'react'
import { Container } from '@material-ui/core'
import Toolbar from '@material-ui/core/Toolbar'
import Typical from 'react-typical'

export default class Navigation extends Component {
  render() {
    return (
    <>
        <h2>I {' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Produce Music',
              1500,
              'Am A Full Stack Dev.', 
              1500,
              'Am Great at "Hacking"', 
              1500,
              'Love You For Givning Me A Chance', 
              1500,
            ]}
          
          />


        </h2>
        <Container>
          <Toolbar>
          <nav>
        <a href='https://github.com/iiAnti'>github</a> 
        <b/>
         <a href='https://www.linkedin.com/in/ivanocreates/' >Linkedin</a>
      </nav>
      </Toolbar>
      </Container>
    </>
    )
  }
}

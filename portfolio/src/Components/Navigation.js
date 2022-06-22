import React, { Component }      from 'react'
import { Container, Typography } from '@material-ui/core'
import Toolbar                   from '@material-ui/core/Toolbar'
import Box                       from '@material-ui/core/Box'
import Link                      from '@material-ui/core/Link'

import Typical                   from 'react-typical'


export default class Navigation extends Component {
  
  render() {
    // const classes = useStyles()
    return (
    <>
    
        {/* <h2>I {' '}
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


        </h2> */}


      <Typography>
         Known as iif
      </Typography>
      <nav>
        <a href=''>github</a>
        <a href=''>Linktree</a>
        <a href=''>Linkdin</a>
        <a href=''>something</a>

      </nav>
       
        
    
    </>
    )
  }
}

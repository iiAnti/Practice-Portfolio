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


  <Container>
    <Toolbar>
      <Typography>
         Known as iif
      </Typography>
      <Box>{[
       'github', 'linkdin', 'linktree', 'spotify'
        ].map((menuOption) => (
          <Link
          id='menuOp'
          component='button'
          variant='body1'>
            {menuOption.toUpperCase()}
          </Link>
        ))}
        
      </Box>
    </Toolbar>
  </Container>
    </>
    )
  }
}

import React, { Component }      from 'react'
import { Container, Typography } from '@material-ui/core'
// import Toolbar                   from '@material-ui/core/Toolbar'
// import Box                       from '@material-ui/core/Box'
// import Link                      from '@material-ui/core/Link'

import Typical                   from 'react-typical'


export default class Navigation extends Component {
  
  render() {
    // const classes = useStyles()
    return (
    <>
    <div class='who'>
        <h4>I {' '}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              'Produce Music',
              2500,
              'Am A Full Stack Dev.', 
              2500,
              'Am Great at "Hacking"', 
              2500,
              'Love You For Givning Me A Chance', 
              2500,
            ]}
          
          />


        </h4>
        </div>


      
      <nav id='stick'>
        <div>
          <a class='side' href='https://github.com/iiAnti'>Github</a>
          <a class='side' href='https://linktr.ee/iif_music'>Linktree</a>
          <a class='side' href='https://www.linkedin.com/in/ivanocreates/'>Linkedin</a>
          <a class='side'  href='#top'>To top</a>
        </div>
      </nav>
       
        
    
    </>
    )
  }
}

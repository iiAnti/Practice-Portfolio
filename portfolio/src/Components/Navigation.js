import React, { Component }      from 'react'
import { Container, Icon, Typography } from '@material-ui/core'
// import Toolbar                   from '@material-ui/core/Toolbar'
// import Box                       from '@material-ui/core/Box'
// import Link                      from '@material-ui/core/Link'

import Typical                   from 'react-typical'


export default class Navigation extends Component {

  
  
  
  render() {
    // const classes = useStyles()
    return (
    <>
    {/* <div class='who'>
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
        </div> */}


      
      <div id='container'>
        <div class='navStick'>
        <div class='nav'>
            <img href='' src='./img/green.jpg' class='logo' />
         <ul>   
          <li><a class='side' href=''>About Me</a></li>
          <li><a class='side' href='https://github.com/iiAnti'><ion-icon name="logo-github"></ion-icon>Github</a></li>
          <li><a class='side' href='https://linktr.ee/iif_music'>Linktree</a></li>
          <li><a class='side' href=''><ion-icon name="document-text-outline"></ion-icon>Contact Me</a></li>
          <li><a class='side' href=''><ion-icon name="musical-notes-outline"></ion-icon>Music</a></li>
          <li><a class='side' href='https://www.linkedin.com/in/ivanocreates/'>Linkedin</a></li>
          <li><a class='side'  href='#top'>To top</a></li>
          </ul>
          </div>
        </div>
        <div class='content'>
          <div class='left-col'>
              <h1>You<br/>Found<br/>Me</h1>
              </div>
              <div class='bottom-right'>
          <div class='right-col'>
            <p>click here for a clip</p>
            
            <iframe id='song' src="https://open.spotify.com/embed/album/3vQBeT5oChxxedPxqngYgW?utm_source=generator" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
        </div>
      </div>
      </div> 
      <audio id='mySound'>
  
        </audio>
     


        
    
    </>
    )
  }
}

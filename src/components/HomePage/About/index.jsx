import React from 'react'
import {Contact, Contactthree, Contacttwo, Container, Downcon, Landingone, Landingthree, Landingtwo, One, Oneimg, Paragrif, Three, Threeimg, Two, Twooimg } from './style'
import oneimg from '../../../assets/img/about.png'
import twooimg from '../../../assets/img/aboutwo.png'
import threeimg from '../../../assets/img/Aboutthree.png'
import one from '../../../assets/img/aboutfo.png'
import two from '../../../assets/img/two.png'
import three from '../../../assets/img/three.png'

const About = () => {
  return (
    <Container>
    <Paragrif>
        <h2>COMPANY</h2>
        <h1>Company Pages</h1>
    </Paragrif>
    <Downcon>
    <Landingone>
        <h1>About One</h1>
        <Oneimg src={oneimg}/>
    </Landingone >
    <Landingtwo>
        <h1>About Two</h1>
        <Twooimg src={twooimg}/>
    </Landingtwo>
    <Landingthree>
        <h1>About Three</h1>
        <Threeimg src={threeimg}/>
    </Landingthree>
    <Contact>
        <h1>Contact one</h1>
        <One src={one}/>
    </Contact>
     <Contacttwo>
      <h1>Conact Two</h1>
      <Two src={two}/>
     </Contacttwo>
     <Contactthree>
        <h1>Contact Three</h1>
        <Three src={three}/>
     </Contactthree>
    </Downcon>
  </Container>
  )
}

export default About
import React from 'react'
import { Container, Downcon, Landingone, Landingthree, Landingtwo, Oneimg, Paragrif, Threeimg, Twooimg } from './style'
import oneimg from '../../../assets/img/oneimg.png'
import twooimg from '../../../assets/img/twoimg.png'
import threeimg from '../../../assets/img/threeimg.png'





const LandingPage
 = () => {
  return (
       
      <Container>
        <Paragrif>
            <h2>LANDING PAGES</h2>
            <h1>Discover all the pages <br /> that you can use over <br /> and over again.</h1>
        </Paragrif>
        <Downcon>
        <Landingone>
            <h1>Landing One</h1>
            <Oneimg src={oneimg}/>
        </Landingone>
        <Landingtwo>
            <h1>Landing Two</h1>
            <Twooimg src={twooimg}/>
        </Landingtwo>
        <Landingthree>
            <h1>Landing Three</h1>
            <Threeimg src={threeimg}/>
        </Landingthree>
        </Downcon>
      </Container>

  )
}

export default LandingPage

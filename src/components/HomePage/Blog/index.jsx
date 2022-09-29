import React from 'react'
import {Contact, Contactthree, Contacttwo, Container, Contwo, Downcon, Downconn, Landingone, Landingthree, Landingtwo, One, Oneimage, Oneimg, Paragrif, Pricing, Pricingcon, Themcon, Three, Threeimg, Two, Twoimage, Twooimg } from './style'
import oneimg from '../../../assets/img/about.png'
import twooimg from '../../../assets/img/aboutwo.png'
import threeimg from '../../../assets/img/Aboutthree.png'
import one from '../../../assets/img/aboutfo.png'
import two from '../../../assets/img/two.png'
import three from '../../../assets/img/three.png'
import oneimage from '../../../assets/img/image.png'
import twoimage from '../../../assets/img/twoimage.png'






const Blog = () => {
  return (
    <Container>
    <Paragrif>
        <h2>BLOG</h2>
        <h1>CMS Pages</h1>
    </Paragrif>
    <Downcon>
    <Landingone>
        <h1>Blog One</h1>
        <Oneimg src={oneimg}/>
    </Landingone>
    <Landingtwo>
        <h1>Blog Two</h1>
        <Twooimg src={twooimg}/>
    </Landingtwo>
    <Landingthree>
        <h1>Blog Article (CMS)</h1>
        <Threeimg src={threeimg}/>
    </Landingthree>
    <Contact>
        <h1>Customer Stories</h1>
        <One src={one}/>
    </Contact>
     <Contacttwo>
      <h1>Customer Stories Article (CMS)</h1>
      <Two src={two}/>
     </Contacttwo>
     <Contactthree>
        <h1>Team Member (CMS)</h1>
        <Three src={three}/>
     </Contactthree>
    </Downcon>
    <Pricing>
        <Themcon>
            <h2>PRICING</h2>
            <h1>Pricing Pages</h1>
        </Themcon>
        <Downconn>
            <Pricingcon>
                <h3>Pricing One</h3>
                <Oneimage src={oneimage}/>
            </Pricingcon>
            <Contwo>
                <h3>Pricing Two</h3>
                <Twoimage src={twoimage}/>
            </Contwo>
        </Downconn>
    </Pricing>
  </Container>
  )
}


export default Blog
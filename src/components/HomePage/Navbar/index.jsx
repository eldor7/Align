import React from 'react'
import { Container, Img, Logo, Menu, Navbarcon, Paragrif, Star, Team} from './style'
import star from '../../../assets/img/star.png'
import logo from '../../../assets/img/logo.png'
import img from '../../../assets/img/img.png'




function Navbar() {
    return (

        <Container>
            <Paragrif>
                <Star src={star} />
                <h1>Tell your customers of something important with this banner!</h1>
            </Paragrif>
            <Navbarcon>
                <Logo src={logo}/>
                <Menu>
                    <p>Overview</p>
                    <p>Pages</p>
                    <p>Template</p>
                </Menu>
                <button>Buy Align</button>
            </Navbarcon>
            <Team>
                <h2>ALIGN UI KIT FOR WEBFLOW</h2>
                <h1>Teams build better <br /> products with <br /><span>Align UI</span></h1>
            </Team>
            <Img src={img}/>
        </Container>



    )
}

export default Navbar
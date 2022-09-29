import React from 'react'
import { Container, Footcon, Footleft, Logo, Overview, Pages, Pagesone, Paragrif, Themcon } from './style'
import logo from '../../../assets/img/logo.png'




const FooterPage = () => {
  return (

    <Container>
        <Footcon>
            <Footleft>
            <h1>Build a beautiful <br /> product with<span>Align</span></h1>
            <h4>Align contains all the pages and sections needed <br />
               to create beautiful digital products with ease.</h4>
            </Footleft>
            <Overview>
                <h5>Overview</h5>
                <p>Home 1</p>
                <p>Home 2</p>
                <p>Home 3</p>
                <p>Pricing 1</p>
                <p>Pricing 2</p>
            </Overview>
            <Pages>
                <h5>Pages</h5>
                <p>About 1</p>
                <p>About 2</p>
                <p>About 3</p>
                <p>Blog 1</p>
                <p>Blog 2</p>
                <p>Blog Post</p>
                <p>Team Member</p>
                <p>404</p>
                <p>Password</p>
            </Pages>
            <Pagesone>
                <h5>Pages</h5>
                <p>Contact 1</p>
                <p>Contact 2</p>
                <p>Contact 3</p>
                <p>Customer Stories</p>
                <p>Customer Story</p>
                <p>Login</p>
                <p>Register</p>
                <p>Style Guide</p>
                <p>Changelog</p>
                <p>Licence</p>
            </Pagesone>
        </Footcon>
        <Paragrif>
            <Logo src={logo} />
            <p>| © Template by <span>Flowbase</span>- Powered by <span>Webflow</span></p>
            <Themcon>
            <h5>Overview</h5>
            <h5>Pages</h5>
            </Themcon>
        </Paragrif>
    </Container>



  )
}

export default FooterPage
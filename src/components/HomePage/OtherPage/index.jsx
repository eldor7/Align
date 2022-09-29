import React from 'react'
import { Cardcon, Changelog, Downcon, Errorcon, Icon, Licence, Login, Maincon, Paragriff, Password, Project, Regcon, Stylecon } from './style'
import icon from '../../../assets/img/icon.png'




const OtherPage = () => {
  return (

    <Maincon>
      <Paragriff>
        <h2>OTHER</h2>
        <h1>Additional Pages</h1>
      </Paragriff>
      <Downcon>
        <Cardcon className='cardcon'>
          <h1>UI Cards</h1>
         <Icon src={icon}/>
        </Cardcon>
       <Login>
        <h1>Login</h1>
        <Icon src={icon}/>
       </Login>
       <Regcon>
        <h1>Register</h1>
        <Icon src={icon}/>
       </Regcon>
       <Password>
        <h1>Forgot Password</h1>
        <Icon src={icon}/>
       </Password>
       <Stylecon>
        <h1>404 Error</h1>
        <Icon src={icon}/>
       </Stylecon>
       <Errorcon>
        <h1>Style Guide</h1>
        <Icon src={icon}/>
       </Errorcon>
       <Changelog>
        <h1>Changelog</h1>
        <Icon src={icon}/>
       </Changelog>
       <Licence>
        <h1>Licence</h1>
        <Icon src={icon}/>
       </Licence>
      </Downcon>
      <Project>
        <h1>Align is the stress-free <br /> way to build your website.</h1>
        <button>Purchase</button>
        <p>$79</p>
        <h5>Build a better website <br />faster today.</h5>
      </Project>
    </Maincon>





  )

}

export default OtherPage
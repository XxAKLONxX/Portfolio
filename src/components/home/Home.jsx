import React from 'react'
import './home.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

const Home = () => {
  return (
<sction className="home container" id="home">
  <div className="intro">
    <img src={Me} alt="" className='home__img' />
    <h1 className="home__name">Ghassen</h1>
    <span className="home__education">I'm an seo specialist and a iron league gamer</span>
    <HeaderSocials/>
    <a href="#contact" className="btn">Contact Me</a>
    <ScrollDown/>
  </div>
  <Shapes />
</sction>
  )
}

export default Home

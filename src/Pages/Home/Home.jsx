import React from 'react'
import Hero1 from '../../Components/Hero/Hero1'
import About from '../../Components/About/About'
import Business from '../../Components/Businesses/Business'
import Boxes from '../../Components/Boxes/Boxes'
import Discover from '../../Components/Discover/Discover'
import Sustainability from '../../Components/Sustainability/Sustainability'
import Career from '../../Components/Career/Career'

const Home = () => {
  return (
    <div>
      <Hero1/>
      <About/>
      <Business/>
      <Career/>
      {/* <Discover/> */}
      <Sustainability/>
      {/* <Board/> */}
      <Boxes/>
    </div>
  )
}

export default Home
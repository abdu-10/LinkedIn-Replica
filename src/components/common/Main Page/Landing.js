import React from 'react'
import NavPanel from '../../common/LandingPage/NavPanel'
import Welcome from '../../common/LandingPage/Welcome'
import Jobs from '../../common/LandingPage/Jobs'
import Topics from '../../common/LandingPage/Topics'
import Post from '../../common/LandingPage/Post'
import Testimonals from '../../common/LandingPage/Testimonals'
import Connect from '../../common/LandingPage/Connect'
import Join from '../../common/LandingPage/Join'
import Footer from '../../common/LandingPage/Footer'
import Footersection from '../../common/LandingPage/Footersection'

const Landing = () => {
  return (
    <>
     <NavPanel />
      <Welcome />
      <Jobs />
      <Topics />
      <Post />
      <Testimonals />
      <Connect /> 
      <Join />
       <Footer />
      <Footersection />
    </>
  )
}

export default Landing
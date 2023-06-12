import React from 'react'
import NavPanel from '../../common/LandingPage/NavPanel'
import Welcome from '../../common/LandingPage/Welcome'
import Jobs from '../../common/LandingPage/Jobs'
import Topics from '../../common/LandingPage/Topics'
import Post from '../../common/LandingPage/Post'
import Connect from '../../common/LandingPage/Connect'
import Join from '../../common/LandingPage/Join'
import Footer from '../../common/LandingPage/Footer'
const Landing = () => {
  return (
    <>
     <NavPanel />
      <Welcome />
      <Jobs />
      <Topics />
      <Post />
      <Connect /> 
      <Join />
       <Footer />
    </>
  )
}

export default Landing
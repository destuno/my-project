import React from 'react'
import Topnav from './components/Topnav'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Services from './components/Services'
import GeoLoc from './components/GeoLoc'
import Contact from './components/Contact'
import FAQ from './components/FAQ'
import News from './components/News'
import Comment from './components/Comment'
import Footer from './components/Footer'
import Recomendation from './components/Recomendation'
import About from './components/About'

const App = () => {
  return (
    <div className='bg-gray-900'>
      <Topnav />
      <Navbar />
      <Intro />
      <Services />
      <Recomendation />
      <GeoLoc />
      <About />
      <FAQ />
      <News />
      <Comment />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;

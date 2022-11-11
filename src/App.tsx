import React from 'react'
import AgencyComp from './Components/AgencyComp';
import Blog from './Components/Blog';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SpecializationComp from './Components/Specialization';




const App = () => {
  return (
    <div>
          <Header />
          <Hero />
          <AgencyComp />
          <SpecializationComp />
          <Features />
          <Blog />
          <Footer />
    </div>
  )
}

export default App
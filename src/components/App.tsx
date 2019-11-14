import React from 'react'
import Navbar from './Navbar/Navbar'
import AboutMe from './Sections/AboutMe/AboutMe'
import Skills from './Sections/Skills/Skills'
import Experience from './Sections/Experience/Experience'
import CodeSamples from './Sections/CodeSamples/CodeSamples'
import References from './Sections/References/References'
import Contact from './Sections/Contact/Contact'
import Footer from './Footer/Footer'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className='App'>
      <AboutMe />
      <Navbar />
      <Skills />
      <Experience />
      <CodeSamples />
      <References />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

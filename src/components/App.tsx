import React from 'react'
import AppContextProvider from '../contexts/AppContext'
import Navbar from './Navbar/Navbar'
import AboutMe from './Sections/AboutMe/AboutMe'
import Skills from './Sections/Skills/Skills'
import Experience from './Sections/Experience/Experience'
import CodeSamples from './Sections/CodeSamples/CodeSamples'
import References from './Sections/References/References'
import Contact from './Sections/Contact/Contact'
import Footer from './Footer/Footer'
import '../translations/i18n'
import './App.scss'
import 'animate.css/animate.min.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <AppContextProvider>
        <AboutMe />
        <Navbar />
        <Skills />
        <Experience />
        <CodeSamples />
        <References />
        <Contact />
        <Footer />
      </AppContextProvider>
    </div>
  )
}

export default App

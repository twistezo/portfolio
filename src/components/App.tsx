import React from 'react'
import AppContextProvider from '../contexts/AppContext'
import Scrollbar from './Scrollbar/Scrollbar'
import AboutMe from './Sections/AboutMe/AboutMe'
import Navbar from './Navbar/Navbar'
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
        <Scrollbar />
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

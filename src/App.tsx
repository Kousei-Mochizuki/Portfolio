// import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero.tsx'
import Projects from './components/Projects.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import './App.css'

function App() {
  return (
    <div>
      <Header/>
        <main>
          <Hero/>
          <Projects/>
          <About/>
          <Contact/>
        </main>
      <Footer/>
    </div>
  )
}

export default App

import React from 'react'
import Header from '../Header'
import Intro from './Intro'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import Education from './Education'

export default function Home() {
  return (
    <div className='md:px-20 bg-primary'>
      <Header/>
      <Intro/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

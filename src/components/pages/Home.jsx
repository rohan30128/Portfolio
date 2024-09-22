import React from 'react'
import Header from '../Header'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='md:px-20 bg-primary'>
      <Header/>
      <Intro/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

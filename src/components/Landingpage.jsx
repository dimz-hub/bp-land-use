import React from 'react'

import Navbar from './Navbar'
import Toppage from './Toppage'
import Aboutpage from './Aboutpage'
import Footer from './Footer'
import Images from './Images'

export default function Landingpage() {
  return (
    <div className='overflow-x-hidden'>
      <div className = 'hero h-[100vh] w-[100vw] '>
        <div className='hero-container w-[100%] h-[100%]'>


        <Navbar />
        <Toppage />
        <Images/>
        <Aboutpage/>
        <Footer/>
        </div>
      </div>
    </div>
  )
}

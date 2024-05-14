import React from 'react'
import Navbar from './Navbar'
import Toppage from './Toppage'
import Aboutpage from './Aboutpage'

export default function Landingpage() {
  return (
    <div className='overflow-x-hidden'>
      <div className = 'hero h-[100vh] w-[100vw] '>
        <div className='hero-container w-[100%] h-[100%]'>


        <Navbar />
        <Toppage />
        <Aboutpage/>
        </div>
      </div>
    </div>
  )
}

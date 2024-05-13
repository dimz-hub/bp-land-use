import React from 'react'
import Navbar from './Navbar'
import Toppage from './Toppage'

export default function Landingpage() {
  return (
    <div>
      <div className = 'hero h-[100vh] w-[100vw] '>
        <div className='hero-container w-[100%] h-[100%]'>


        <Navbar />
        <Toppage />
        </div>
      </div>
    </div>
  )
}

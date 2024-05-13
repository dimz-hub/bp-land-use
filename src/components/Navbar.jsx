import React, {useState} from 'react'

export default function Navbar() {

  const [isActive , setIsActive] = useState('home')
  

  return (
    <div >
        <div className='w-[90%] m-[auto] flex items-center justify-between pt-[20px] text-[white]' > 
              <div className='text-[30px]'>Logo</div>
              <div className='flex  gap-[30px] text-[22px]'>
                <span className={` ${isActive === 'Home'? 'nav-active': 'nav-link'} cursor-pointer  `} onClick={() => setIsActive('Home')}>Home</span>
                <span className={` ${isActive === 'About'? 'nav-active': 'nav-link'}  cursor-pointer  `} onClick={() => setIsActive('About')} >About</span>
                <span className={` ${isActive === 'Pay'? 'nav-active': 'nav-link'} cursor-pointer `} onClick={() => setIsActive('Pay')}>Pay land use</span>
                <span className={` ${isActive === 'Admin'? 'nav-active': 'nav-link'} cursor-pointer  `} onClick={() => setIsActive('Admin')}>Admin</span>
              </div>
        </div>
    </div>
  )
}

import React, {useState} from 'react'

export default function Navbar() {

  const [isActive , setIsActive] = useState('home')
  

  return (
    <div >
        <div className='w-[90%] m-[auto] flex items-center justify-between pt-[20px] text-[white]' > 
              <div className='text-[30px]'>Tobela Logo</div>
              <div className='flex  gap-[30px] text-[22px]'>
                <span className={` ${isActive === 'Home'? 'nav-active': 'nav-link'} cursor-pointer  `} onClick={() => setIsActive('Home')}>Home</span>
               <a href='#about'> <span className={` ${isActive === 'About'? 'nav-active': 'nav-link'}  cursor-pointer  `} onClick={() => setIsActive('About')} >About</span></a>
                <span className={` ${isActive === 'Pay'? 'nav-active': 'nav-link'} cursor-pointer `} onClick={() => setIsActive('Pay')}>Obtain Documents</span>
                <span className={` ${isActive === 'Admin'? 'nav-active': 'nav-link'} cursor-pointer  `} onClick={() => setIsActive('Admin')}>Login</span>
              </div>
        </div>
    </div>
  )
}

import React, {useState} from 'react'
import { updateProfile,  createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../utils/firebase'
import {useNavigate} from 'react-router-dom'




export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()
   
  
  
  
    
    async function handleSubmit(e) {
      e.preventDefault()
      try{
        const res =  await createUserWithEmailAndPassword(auth,email, password)
  
        
         await updateProfile(res.user, {
      displayName,  
    })
    
    navigate('/admin')


      } catch(err) {
        setError(true)
        console.log(err.message)
  
      }  
  }
  
  
    return (
      <div className=' h-[100vh] w-[100vw] flex items-center justify-center'>
  
      <div className='signup flex flex-col items-center rounded-[20px] h-[70vh] w-[50%]  bg-[#7FC7D9] pt-[40px] gap-[px] xs:w-[100%] xs:h-[100%] xs:rounded-none  xs:pt-[75px] '>
        
         <h1 className='mb-[10px] font-bold text-2xl text-[white]'>
          
         </h1>
  
         <h2 className='font-[500] text-xl xs:mb-[40px] text-[white]'>SignUp</h2>
         <form onSubmit={handleSubmit}  className='flex flex-col items-center justify-center gap-[30px] mt-[10px] '>
          <span className = ' xs:mb-[20px]' >
          <input type='text' id='name' className=' signup-input rounded-[10px] text-[black] h-[40px] w-[300px]' value = {displayName} placeholder='display name' onChange={(e) => setDisplayName(e.target.value)}  required/>
          </span>
          <span className = ' xs:mb-[20px]'>
          <input type='email' id='email' className=' signup-input rounded-[10px] text-[black]  h-[40px] w-[300px]' placeholder='email' onChange={(e) => setEmail(e.target.value)}  required/>
          </span>
        <span className = ' xs:mb-[20px]'>
          <input type='password'id='password' className=' signup-input rounded-[10px] text-[black]  h-[40px] w-[300px]' placeholder='password' onChange={(e) => setPassword(e.target.value)} required/>
        </span>
         <button className=' hero-button p-3 outline-none bg-[black] text-[white]  w-[12rem] rounded-[10px] mt-[15px] font-[600] '>SignUp</button>
        
         </form>
          {error && <span>Something went wrong</span>}
         </div>
      </div>
    )
}

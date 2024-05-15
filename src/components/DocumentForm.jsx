import React , {useState} from 'react'
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { db } from '../utils/firebase'
import {v4 as uuid}  from 'uuid'

export default function DocumentForm() {



    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [survey, setSurvey] = useState('')
    const [asBuilt, setAsBuilt] = useState('')
    const [structure, setStructure] = useState('')
    const [destructive, setDestructive] = useState('')
    const [letter, setLetter] = useState('')
    const [landUse, setLandUse] = useState('')
    const [applicants, setApplicants] = useState('')
    const [message, setMessage] = useState('')
    const [customerDocuments, setCustomerDocuments] = useState([])


    async function handleSubmit(e) {
        e.preventDefault()

        try{

          
          const newDocument = {
          id:uuid(),
          firstName: firstName,
          lastName: lastName,
          number: number || null,
          email: email,
          title: title || '',
          survey:survey || '',
          asBuilt:asBuilt || '',
          structure:structure || '',
          destructive:destructive || '',
          letter:letter || '',
          landUse:landUse || '',
          applicants:applicants || '',
          message: message || '',
          time: Timestamp.now()
        };

        setCustomerDocuments([...customerDocuments, newDocument])

        
        await addDoc(collection(db, 'documents'), newDocument);

        setFirstName('')
        setLastName('')
        setNumber('')
        setEmail('')
        setTitle('')
        setSurvey('')
        setAsBuilt('')
        setStructure('')
        setDestructive('')
        setLetter('')
        setLandUse('')
        setApplicants('')
        setMessage('')
      
        
      }catch(err){
          alert(console.log(err.message))
      }
        
        
      }
      



  return (
    <div className='w-[100vw]  '  > 
     <div className='w-[90vw] p-[25px] m-[auto] flex flex-col items-center justify-center xs:w-[100vw]'> 
             <h1 className='text-[45px] font-[800] text-[#4F6F52] mb-[25px] xs:text-center xs:text-[37px]'>
                Obtain Documents
             </h1>
             <p className='text-center font-[500] text-[25px] mb-[30px] xs:text-[20px]  '>
            
Please make us aware of the documents you have by filling the form, and we will reach out to you <br/> via phone or email for further guidance.
             </p>

             <form className='flex flex-col gap-[15px]  xs:m-[auto] m-[auto] w-[45vw]  '  onSubmit={handleSubmit}>
          <div className='flex flex-col justify-center ' >
          <label for="firstname" className=' text-[22px] font-[400]' >First Name <span className=' font-[200] text-[17px]'> (required)  </span>  </label>
         <input   className='enquiry-input xs:w-[85vw] '  type="text" id="firstname" name="firstname" value={firstName} required  onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-center' >
          <label for="lastname" className='text-[] text-[22px] font-[400]'>Last Name<span className=' font-[200] text-[17px]'> (required)  </span> </label>
         <input  className='enquiry-input xs:w-[85vw] ' type="text" id="lastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
          </div>
          <div className='flex flex-col justify-center' >
          <label for="number" className='text-[] text-[22px] font-[400]'>Phone Number</label>
         <input  className='enquiry-input xs:w-[85vw]' type="text" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className='flex flex-col justify-center' >
          <label for="email" className='text-[] text-[22px] font-[400]'> Email Address <span className=' font-[200] text-[17px]'> (required)  </span></label>
         <input  className='enquiry-input xs:w-[85vw] ' type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have a title document/proof of ownership? <span className=' font-[200] text-[17px]'> (required)  </span>
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='title' required checked={title === 'Yes'} value="Yes" onChange={(e) => setTitle(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='title'  required   value="No" checked={title === 'No'} onChange={(e) => setTitle(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col  justify-center' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have a survey plan? 
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='survey' required checked={ survey === 'Yes'} value="Yes" onChange={(e) => setSurvey(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='survey'  required   value="No" checked={survey === 'No'} onChange={(e) => setSurvey(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have as-built architectural drawings ? 
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='asBuilt' required checked={asBuilt === 'Yes' } value="Yes" onChange={(e) => setAsBuilt(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='asBuilt'  required   value="No" checked={asBuilt === 'No'} onChange={(e) => setAsBuilt(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have structural, electrical and mechanical drawings (where applicable) ? 
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='structure' checked={structure === 'Yes' } value="Yes" onChange={(e) => setStructure(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='stucture'   value="No" checked={structure === 'No'} onChange={(e) => setStructure(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have non-destructive integrity test report(where applicable)  ? 
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='destructive' required checked={destructive === 'Yes' } value="Yes" onChange={(e) => setDestructive(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='destructive'  required   value="No" checked={destructive === 'No'} onChange={(e) => setDestructive(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have letter of structural stability and indemnity (where applicable) ? 
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='letter' required checked={letter === 'Yes' } value="Yes" onChange={(e) => setLetter(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='letter'  required   value="No" checked={letter === 'No' } onChange={(e) => setLetter(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
                Do you have land use planning analysis report ?
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='landUse' required checked={landUse === 'Yes'} value="Yes" onChange={(e) => setLandUse(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='landUse'  required   value="No" checked={landUse === 'No'} onChange={(e) => setLandUse(e.target.value)}/> No
                </label>
            </div>
          </div>
          <div className='flex flex-col justify-center ' >
            <p className='text-[] text-[22px] font-[400]'>
           Are you tax compliant ? 
            </p>
            <div className='flex items-center gap-[10px] text-[17px] font-[300] xs:mt-[20px] ' >
                <label className='xs:text-[15px]'>

              <input type='radio' name='appliants' required checked={ applicants === 'Yes'} value="Yes" onChange={(e) => setApplicants(e.target.value)} /> Yes
                </label>
                <label className='xs:text-[15px]'>

              <input type='radio' name='appliants'  required   value="No" checked={applicants === 'No'} onChange={(e) => setApplicants(e.target.value)}/>No
                </label>
            </div>
          </div>

          <div className='flex flex-col justify-center gap-[10px]' >
          <label for="message" className='text-[] text-[22px] font-[400]'> Message <span className='text-[gray] font-[200] text-[17px]'> (required)  </span></label>
    <textarea id="message" name="message" rows="4" value = {message} cols="50" placeholder="state other documents available here"  required className='enquiry-textarea rounded-[5px] xs:w-[85vw]' onChange={(e) => setMessage(e.target.value)}></textarea>

          </div>
      
      
<div className ='xs:w-[50vw] xs:m-[auto] ml-[45px]'>
          <button type='submit' className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[150px] w-[12rem] rounded-[10px] mt-[15px] font-[600] xs: xs:text-center xs:ml-[0px] '>
            Submit
          </button> 
          </div>
         
             </form>
         
     </div>

  

    </div>
  )
}

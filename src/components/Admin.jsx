import React, {useEffect, useState} from 'react'
import { signOut } from "firebase/auth";
import { useAuthContext } from '../utils/AuthContext';
import { getDocs, collection } from 'firebase/firestore'
import { db, auth } from '../utils/firebase';
import { useNavigate, } from 'react-router-dom';

export default function Admin() {
    const {currentUser} = useAuthContext()
    const [documents, setDocuments] = useState([])
    const navigate = useNavigate()
  
   
 
   useEffect(() => {
     const fetchData = async () => {
       const querySnapshot = await getDocs(collection(db, 'documents'));
       const fetchedDocuments = [];
       querySnapshot.forEach((doc) => {
         fetchedDocuments.push(doc.data());
       });
 
       fetchedDocuments.sort((a, b) => {
         const timeA = a?.time?.toDate() || 0; // Convert to Date object or use 0 if undefined
         const timeB = b?.time?.toDate() || 0; // Convert to Date object or use 0 if undefined
       
         // Sort in descending order (latest first), adjust the comparison for ascending order if needed
         return timeB - timeA;
       });
 
 
       setDocuments(fetchedDocuments);
     };
 
     fetchData();
   }, [currentUser]);
 
   function timeAgo(createdAtTimestamp) {
     // Convert the createdAt timestamp to a Date object
     const createdAt = new Date(createdAtTimestamp);
   
     // Get the current time
     const now = new Date();
   
     // Calculate the time difference in milliseconds
     const timeDifference = now - createdAt;
   
     // Convert the time difference to seconds
     const seconds = Math.floor(timeDifference / 1000);
   
     // Define time intervals in seconds
     const minute = 60;
     const hour = 60 * minute;
     const day = 24 * hour;
     const month = 30 * day;
     const year = 365 * day;
   
     // Determine the appropriate time unit and value
     if (seconds < minute) {
       return seconds + ' seconds ago';
     } else if (seconds < hour) {
       const minutes = Math.floor(seconds / minute);
       return minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
     } else if (seconds < day) {
       const hours = Math.floor(seconds / hour);
       return hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
     } else if (seconds < month) {
       const days = Math.floor(seconds / day);
       return days + ' day' + (days > 1 ? 's' : '') + ' ago';
     } else if (seconds < year) {
       const months = Math.floor(seconds / month);
       return months + ' month' + (months > 1 ? 's' : '') + ' ago';
     } else {
       const years = Math.floor(seconds / year);
       return years + ' year' + (years > 1 ? 's' : '') + ' ago';
     }
   }
 
async function handleSignOut(){
    await signOut(auth)
   navigate('/')      
         
       
 }
 
   return (
     <>
      
     
     <div className='w-[100vw]   min-h-[100vh]  mission'>
         <div className='w-[80vw] m-[auto]'>
             
             <h1 className='w-[80vw] flex items-center justify-center  font-[600] text-[45px] mb-[30px]'>ADMIN</h1>
           <div className='flex items-center justify-between'> 
             <h1 className ='font-[500] text-[40px] xs:text-[20px]'>
                
                 Welcome {currentUser && currentUser.displayName}
                 </h1>
                 <button className=' hero-button p-3 outline-none bg-[black] text-[white] ml-[150px] w-[12rem] rounded-[10px]  font-[600] ' onClick={() => handleSignOut()}>
                     Logout
                 </button>
           </div>
 
           <div>
             <h3 className='font-[500]  text-[40px] flex w-[80vw] items-center justify-center mt-[40px] underline xs:text-[22px]'>
                  Clients documents
             </h3>
             <div>
             {
             documents.map((doc) => {
             return(
             
             <div key= {doc?.id} className='text-[30px] p-3 border-b border-gray-300 xs:text-[19px]'>
 
 <p>Name: {doc.firstName} {doc.lastName}</p>
 <p>Email: {doc.email}</p>
     {doc.number && <p>
         Phone Number: {doc.number}
     </p> }
 <p>  Do you have a title document/proof of ownership?: {doc.title}</p>
 <p>Do you have a survey plan? : {doc.survey}</p>
 <p> Do you have as-built architectural drawings ?: {doc.asBuilt}</p>
 <p> Do you have structural, electrical and mechanical drawings?: {doc.structure}</p>
 <p>Do you have non-destructive integrity test report(where applicable)?: {doc.destructive}</p>
 <p>Do you have letter of structural stability and indemnity (where applicable)?: {doc.letter}</p>
 <p>Do you have land use planning analysis report ?: {doc.landUse}</p>
 <p>Are you tax compliant ? : {doc.applicants}</p>
     <p>Message: {doc.message}</p>
     <div className='  flex'> <div>Message:</div> <div className='break-words w-[800px]'>{doc.message}</div></div>
     <p>Time: {timeAgo(doc?.time?.toDate())}</p>
 
 
             </div>
             
             )
             
             })
             
             
             }
 
             </div>
           </div>
 
 
         </div>
     </div>
   </>
   )
}

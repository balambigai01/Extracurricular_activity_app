import React from 'react'
import Navbar from './Navbar'

function Registration() {
  return (
<div>
   <div className='flex flex-col-2 sm:flex-col-2 h-fit  w-full justify-center'>
   {/* <div className='hidden sm:block'>
  <img className="w-full h-full object-cover" src={loginImg} alt=""/>
  </div> */}
   
   
  
    <form className=' bg-gray-500 py-5 px-12 mt-40 w-auto rounded-lg'>
       

        <h2 className='text-4xl text-white font-bold  mb-2  text-center'>REGISTRATION FOR<br/> PARTICIPATING EVENT</h2>
        
        <div className='flex flex-col text-left   text-gray-100 py-2'>
           <label>Name</label>
           <input type="text" className='  text-black' />
        </div>
        <div className='flex flex-col text-left text-gray-100 py-2'>
           <label>College Regno</label>
           <input type="number" className='text-black'/>
        </div>
      
        <div className='flex flex-col text-gray-100 py-2'>
           <label>Department</label>
           <input type="text" className='text-black' />
        </div>
        <div className='flex flex-row text-gray-100  py-4'>
           <label>Year</label>
           {/* <input type="text"  className='text-black'/> */}
            
              <select className='text-black w-1/4 ml-10' id="cars">
               
               <option value="volvo">First Year</option>
               <option value="volvo">Second Year</option>
               <option value="volvo">Third Year</option>
               <option value="volvo">Final Year</option></select></div>
        
        <div className='flex flex-col text-gray-100 py-2'>
           <label>Phone Number</label>
           <input type="number"  className='text-black'/>
        </div>
        <div className='flex flex-col text-gray-100 py-2'>
           <label>Email</label>
           <input type="email"  className='text-black'/>
        </div>
        <div className='flex flex-col text-gray-100 py-2'>
           <label>Organizer Details<br/>(college/company name and address)</label>
          <textarea rows={2} cols={10} className='text-black'></textarea>
        </div>
        <div className='flex flex-row text-gray-100  py-4'>
           <label>Event</label>
           {/* <input type="text"  className='text-black'/> */}
            
           <input type="radio" id="tech" name="fav_language" className='ml-4'  value="tech"/>
           <label for="tech" className='text-black '>Technical Event</label>
           <input type="radio" id="non-tech" name="fav_language"className='ml-4' value="non-tech"/>
           <label for="non-tech" className='text-black'>Non-technical Event</label>
          <input type="radio" id="non-tech" name="fav_language"className='ml-4' value="non-tech"/>
           <label for="non-tech" className='text-black'>Both</label>
        
        </div>
        <div className='flex flex-col text-gray-100 py-2'>
           <label>Number of events registered</label>
           <input type="number"  className='text-black'/>
        </div>
        <div className='flex flex-col text-left   text-gray-100 py-2'>
           <label>Name of the events</label>
           <input type="text" className='  text-black' />
        </div>
        <div className='flex flex-row text-gray-100 pt-5 '>
           <label>Event Date</label>
           <input type="date" className='text-black w-2/5 ml-2'></input>
        </div>
        <div className='text-center pt-3 '>
             <button type='button' className='btn font-bold bg-gray-700 text-white mt-4 btn-default p-2 '>RESET</button>
             <button type='button' className='btn font-bold bg-gray-700 text-white  mt-4 btn-default p-2  ml-16'>SUBMIT</button>
             
             </div>
            
       
    </form>
  </div>
  <Navbar />
  </div>
  )
}

export default Registration

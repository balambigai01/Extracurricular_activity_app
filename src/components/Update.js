import React from 'react'
import Navbar from './Navbar'

function Update() {
  return (
    <div>
      <div className='flex flex-col-2 sm:flex-col-2 h-fit  w-full justify-center'>
        <form className=' bg-gray-500 py-10 px-12 mt-36 w-auto rounded-lg'>
            

             <h2 className='text-3xl text-white font-bold  mb-2  text-center'>UPDATE<br/> ANNOUNCEMENT</h2>
             
             <div className='flex flex-col text-left   text-gray-100 py-2'>
                <label>Title</label>
                <input type="text" className='  text-black' />
             
             
             </div>
             <div className='flex flex-col text-left text-gray-100 py-2'>
                <label>Description</label>
                <input type="text" className='text-black'/>
             </div>
           
             <div className='flex flex-col text-gray-100 py-2'>
                <label>Link</label>
                <input type="url" className='text-black' />
             </div>
             <div className='flex flex-row text-gray-100 py-4'>
                <label>Broucher</label>
                <input type="file" className='text-black px-6'/>
             </div>
              <div className='text-center '>
             <button type='button' className='btn font-bold bg-gray-700 text-white my-7 btn-default  p-2'>CANCEL</button>
             <button type='button' className='btn font-bold bg-gray-700 text-white my-7 btn-default  ml-9 p-2'>UPDATE</button>
             
             </div>
            
            
         </form>
       </div>
       <Navbar />
    </div>
  )
}

export default Update

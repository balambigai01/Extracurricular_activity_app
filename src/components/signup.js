import React from 'react';


function Login() {
  return (
    // <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
       <div className='flex flex-col-2 sm:flex-col-2 h-fit  w-full justify-center'>
        {/* <div className='hidden sm:block'>
       <img className="w-full h-full object-cover" src={loginImg} alt=""/>
       </div> */}
        
        
       
         <form className=' bg-gray-500 py-10 px-20 mt-20 rounded-lg'>
            

             <h2 className='text-4xl text-white font-bold mt-3 text-center'>SIGN UP</h2>
             
             <div className='flex flex-col text-left text-gray-100 py-2'>
                <label>First Name</label>
                <input type="text" />
             
             
             </div>
             <div className='flex flex-col text-left text-gray-100 py-2'>
                <label>Last Name</label>
                <input type="text" />
             </div>
             <div className='flex flex-col text-gray-100 py-2'>
                <label>Email</label>
                <input type="email" />
             </div>
             <div className='flex flex-col text-gray-100 py-2'>
                <label>Password</label>
                <input type="password" />
             </div>
             <div className='flex flex-col text-gray-100 py-2'>
                <label>Confirm Password</label>
                <input type="password" />
             </div>
             
             <div className='text-center'>
             <button type='button' className='btn font-bold bg-gray-700 text-white my-7 btn-default p-2'>SIGN UP</button>
             
             </div>
             {/* <button className='text-2xl text-white bg-black font-bold '>Sign up</button> */}
         </form>
       </div>

    
  )
}

export default Login

import React from 'react'
import img from '../assets/plus.png'
import { NavLink } from 'react-router-dom'


const Home = () => {

  return(
    <>
        <div className='text-5xl p-5 text-center font-semibold text-gray-600'>
          Keep Notes
        </div>     
        <div className='flex justify-center pb-2' >
          A web application to keep all your reminders and important notes safe on cloud
        </div>
        <div className='text-center'>
        Integrating Amazon AWS for safekeeping of all your notes
        </div>
        <div className='flex justify-center p-'><NavLink to="/add_notes" className="flex">Add note <img src={img} height='20px' width='20px' className='ml-2'/></NavLink></div>
      </>
  );
}

export default Home;



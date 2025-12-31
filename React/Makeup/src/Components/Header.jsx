import React from 'react'
import {Link} from 'react-router-dom';
import { IoHome } from "react-icons/io5";
const Header = () => {
  return (
    <>
      
      <div className='bg-yellow-300 mb-4'>
        <h1 className='border border-amber-500 bg-red-500 text-center'>My Website</h1>
        <div className='flex space-x-4 justify-center bg-blue-500 p-4'>
           
          <Link to={"/home"} className="text-decoration-none text-light flex items-center gap-1"><IoHome className='text-red-600' / ><span >Home</span></Link>
          <Link to={"/about"} className="text-decoration-none text-light">About</Link>
          <Link to={"/contact"} className="text-decoration-none text-light">Contact</Link>
          <Link to={"/product"} className="text-decoration-none text-light">Product</Link>
          <Link to={"/login"} className="text-decoration-none text-light">Login</Link>
          <Link to={"/signup"} className="text-decoration-none text-light">Signup</Link>
            
        </div>
      </div>
    </>
  )
}

export default Header;

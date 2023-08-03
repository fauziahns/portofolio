import React from 'react'
import image from '../../assets/image'


export default function Navbar() {
  return (
    <div className='bg-[#212529] flex items-center drop-shadow-sm'>
        <div className="ps-10 w-1/4">
            <img src={image.navLogo} alt="" />
        </div>

         <div className="text-white text-[16px] p-2 items-center w-3/4">
            <div className="flex space-x-7">
                <a href="#portofolio" >Portofolio</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </div>
  )
}

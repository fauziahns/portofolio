import React from 'react'
import image from '../../assets/image'

export default function Footer() {
  return (
    <div className='flex items-center p-4 lg:ps-16 md:ps-12 gap-8 mt-40 flex-wrap  border-t-2 py-10'>
      <div className="">
        <img src={image.footer} alt="" />
      </div>

      <div className=" text-white">
        <p className='text-[32px] font-[600]'>Keep In Touch With Me</p>
        <p className='pt-4'>For business inquiry please send email to <a href="mailto:fauziahnsf@gmail.com">fauziahnsf@gmail.com</a> </p>
      </div>
    </div>
  )
}

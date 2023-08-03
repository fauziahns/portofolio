import React from 'react'
import image from '../../assets/image'

export default function CardHighlights() {
  return (
    <div className="justify-center flex p-4 text-white pt-20" id='contact'>
        <div className="bg-gradient-to-br from-fuchsia-400 via-violet-600 to-violet-700 rounded-2xl p-5 px-10">
            <p className='font-[600] text-[32px] pb-12'>Highlights About Me</p>
            <div className="flex flex-wrap gap-20 pb-5">
                <div className="">
                    <p className='font-[600] text-[18px] pb-4'>Education</p>
                    <p className='pb-2'>Universitas Komputer Indonesia</p>
                    <p>Sistem Informasi - GPA 3,72</p>
                </div>
                <div className="">
                    <p className='font-[600] text-[18px] pb-4'>Experience</p>
                    <p className='pb-2'>Alterra Academy</p>
                    <p>Front-End Engineer Career with ReactJS</p>
                </div>
                <div className="">
                    <p className='font-[600] text-[18px] pb-4'>Contact</p>
                    <div className="flex gap-4">
                        <a href="https://www.behance.net/fauziahnursyifa" target="_blank"><img src={image.behance} alt="" /> </a>
                        <a href="https://www.linkedin.com/in/fauziah-nur-syifa-27552a216/" target="_blank"><img src={image.linkedin} alt="" className='h-[18px]'/></a>
                        <a href="mailto:fauziahnsf@gmail.com" target="_blank"><img src={image.gmail} alt="" /> </a>
                        <a href="https://github.com/fauziahns" target="_blank"><img src={image.github} alt="" /></a>
                    </div>
                </div>
      
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Card({title, desc, position, skill, thumbline, link, addOn }) {
  return (
    <div className='flex flex-wrap pb-14'>
      <img src={thumbline} alt="" />

      <div className="lg:max-w-[40%] lg:ps-4">
        <p className='text-[20px] font-[600] pb-4'><a href={link} target="_blank" className='hover:brightness-75'>{title}</a></p>
        <p className='leading-loose text-justify'>{desc}</p> 
        <p className='text-[12px]'>{addOn}</p>
        <p className='font-[600] pt-4 text-[18px]'>{position}</p>
        <img src={skill} alt="skill" className='pt-2' />
      </div>

    </div>
  )
}

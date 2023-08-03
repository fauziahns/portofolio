import React from 'react'
import Button from '../Button/Button'
import ButtonRing from '../Button/ButtonRing'

export default function Hero() {
  return (
    <div className='bg-[#212529]'>
      <div className="flex flex-wrap-reverse items-center justify-center">

        <div className="text-white font-[500] text-justify">
            <p className='text-[20px]'>HELLO! I’M <a className='text-[#AD6DF4] animate-bounce'>FAUZIAH NUR SYIFA </a></p>
            <p className='font-[400] leading-loose w-96 py-4'>I’m ungraduated student at Universitas Komputer Indonesia. I’m very passioned at Web Developing especially Front End Developer.
             I’m currently following program Kampus Merdeka which is “Complete Front End with ReactJS” at Alterra Academy.</p>
            
            <div className="flex gap-4">
                <Button text={'Download CV'}/>
                <ButtonRing text={'See Portofolio'} />
            </div>

            <img src="././src/assets/skill.png" alt="skill" className='w-[90%] pt-2' />
        </div>

        <div className="">
            <img src='././src/assets/heroImage.png' alt="heroImage" />
        </div>
        
      </div>
    </div>
  )
}

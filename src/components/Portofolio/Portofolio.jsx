import React from 'react'
import Card from './Card'

export default function Portofolio() {
  return (
    <div className='text-white pt-20 lg:ps-44 md:ps-20' id='portofolio'>
      <p className='text-[32px] font-[600] pb-12'>Portofolio</p>
      <div className="flex flex-wrap flow-row">
        <Card
            link={'https://creative-hub-bandung-6qdc.vercel.app/'}
            thumbline={'././src/assets/creativehub.png'}
            title={'Creative Hub Bandung'}
            position={'FrontEnd Developer - 2023'}
            skill={'././src/assets/creativeskill.png'}
            desc={'This is my final project at Alterra Academy. This website is based on a real case, this website features a form for applying for a room rent at Creative Hub Bandung'}/>  
        <Card
            link={'https://admin.tripease.my.id/'}
            thumbline={'././src/assets/tripease.png'}
            title={'Tripease'}
            desc={'This is my final capstone project at Alterra Academy. Tripease is a website admin that can manage various activities, such as viewing hotel and train transactions, adding new users, and so on.'}
            addOn={'admin@gmail.com / qweqwe123 '}
            position={'FrontEnd Developer - 2023'}
            skill={'././src/assets/skilltripese.png'}/>  
        <Card
            link={'https://tripease.my.id/'}
            thumbline={'././src/assets/tripeaseLandingPage.png'}
            title={'Tripease Landing Page'}
            desc={'The tripease landing page is a continuation of the capstone project at Alterra Academy'}
            skill={'././src/assets/LandingPageSkill.png'}
            position={'FrontEnd Developer - 2023'}/>  
        <Card
            link={'https://www.behance.net/gallery/147580865/IVa-Informasi-Vaksin-UI-Design'}
            thumbline={'././src/assets/iva.png'}
            title={'IVa (Informasi Vaksin)'}
            desc={'This is my final project semester 4 in Universitas Komputer Indonesia. This is UI for an application that provide information about vaccine.'}
            skill={'././src/assets/figma.png'}
            position={'UI/UX Designer - 2022'}/>  

      </div>
    </div>
  )
}

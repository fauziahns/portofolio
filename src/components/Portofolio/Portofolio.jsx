import React from 'react'
import Card from './Card'
import image from '../../assets/image'

export default function Portofolio() {
  return (
    <div className='text-white pt-20 lg:ps-44 md:ps-20' id='portofolio'>
      <p className='text-[32px] font-[600] pb-12'>Portofolio</p>
      <div className="flex flex-wrap flow-row">
        <Card
          link={'https://creative-center-jawa-barat-h2p8.vercel.app/'}
          thumbline={image.creativehub}
          title={'Creative Center Jawa Barat'}
          position={'Fullstack - 2024'}
          skill={image.creativeskill}
          desc={'This is my final project during college. In this website there are features for applying for a room loan, viewing schedules, creating an account, verifying an account and many more. My final project got a perfect final grade (A)'}
        />
        <Card
            link={'https://admin.tripease.my.id/'}
            thumbline={image.tripease}
            title={'Tripease'}
            desc={'This is my final capstone project at Alterra Academy. Tripease is a website admin that can manage various activities, such as viewing hotel and train transactions, adding new users, and so on.'}
            addOn={'admin@gmail.com / qweqwe123 '}
            position={'FrontEnd Developer - 2023'}
            skill={image.skilltripese}/>  
        <Card
            link={'https://creative-hub-bandung-6qdc.vercel.app/'}
            thumbline={image.creativehub}
            title={'Creative Hub Bandung'}
            position={'FrontEnd Developer - 2023'}
            skill={image.creativeskill}
            desc={'This is my final project at Alterra Academy. This website is based on a real case, this website features a form for applying for a room rent at Creative Hub Bandung'}/>  
        <Card
            link={'https://tripease.my.id/'}
            thumbline={image.tripeaseLandingPage}
            title={'Tripease Landing Page'}
            desc={'The tripease landing page is a continuation of the capstone project at Alterra Academy'}
            skill={image.landingPageSkill}
            position={'FrontEnd Developer - 2023'}/>  
        <Card
            link={'https://www.behance.net/gallery/147580865/IVa-Informasi-Vaksin-UI-Design'}
            thumbline={image.iva}
            title={'IVa (Informasi Vaksin)'}
            desc={'This is my final project semester 4 in Universitas Komputer Indonesia. This is UI for an application that provide information about vaccine.'}
            skill={image.figma}
            position={'UI/UX Designer - 2022'}/>  

      </div>
    </div>
  )
}

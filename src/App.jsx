
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import CardHighlights from './components/Card/CardHighlights'
import Portofolio from './components/Portofolio/Portofolio'
import image from './assets/image'
import CardContact from './components/Card/CardContact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='bg-[#212529]'>
    <Navbar/>
    <Hero/>
    <CardHighlights/>
    <Portofolio/>
    <div className="lg:ps-44 md:ps-20 pt-10" id='experience'>
      <p className='text-white text-[32px] pb-8'>Certifacate</p>
      <img src={image.certificate} alt="certificateFauziahNurSyifa" className='rounded-lg justify-center items-center ' />
    </div>
    <CardContact/>
    <Footer/>
    </div>
  )
}

export default App

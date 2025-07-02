import React from 'react'
import bgImage from '../../assets/Rizky Pic.svg'
import Button from '../atom/Button'
import Header from '../organism/Header'
import Footer from '../organism/Footer'

const Home = () => {
  return (
    <>
      <Header></Header>
      <main>
          <section className='flex justify-between items-center h-screen px-[10%]'>
            <div className='flex flex-col justify-center items-start max-w-[55%]'>
              <h1 className='text-5xl font-bold'>Hi, I'm M Rizky Aditya Utama!</h1>
              <h2 className='text-3xl font-bold text-dusty-purple-gray'>Full-Stack Developer</h2>
              <p className='text-base mt-[20px] mb-[40px]'>
                From brewing coffee to building software. I bring a hands-on mindset and love for learning into every project. With a degree in Computer Systems and experience at PT Pertamina Gas Negara in sales and customer service, I'm now diving deep into full-stack development through Harisenin Bootcamp and Meta's Front-End program on Coursera. Currently building real-world apps with React and Tailwind.
              </p>

              <div className='flex justify-between w-[320px] h-[50px]'>
                <Button>Hire Me</Button>
                <Button>Let's Talk</Button>
              </div>
            </div>
              

            <div className='w-full'>
              <img src={bgImage} alt="Hero Image" className='absolute bottom-0 right-0 h-[100%] w-auto'/>
            </div>

            <span className='absolute right-10 w-[700px] h-full hover:bg-soft-cream transtition duration-3000 hover:opacity-80 z-10'></span>
          </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Home
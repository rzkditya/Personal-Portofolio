import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../organism/Header'
import Skills from '../atom/Skills'
import Main from '../layout/Main'
import Footer from '../organism/Footer'
import RizCof from '../../assets/Rizky Coffee.jpg'
import RizPgn from '../../assets/Rizky PGN.jpg'
import RizCod from '../../assets/Rizky Code.jpg'
import Tailwind from '../../assets/Tailwindcss.svg'

const iconSize = 'text-5xl'

const About = () => {
  return (
    <>
      <Header></Header>
      <Main className='flex flex-col'>
        <section className='flex flex-col min-h-screen snap-start justify-center gap-6 text-sm'>
          <div className='flex flex-col justify-end items-center mb-4'>
            <h1>About Me</h1>
            <p>Everyone starts somewhere. Here’s how I went from coffee cups to code editors — and where I’m headed next.</p>
          </div>

          <div className='flex justify-center items-center gap-x-12'>   
            <div className='flex flex-col justify-evenly items-start w-[50%]'>
              <h2 className='text-3xl font-bold'>Chapter 1 – Brew, Learn, Repeat</h2>
              <p className='mt-[20px] mb-[40px] text-left'>
                I graduated with a degree in Computer System, but after college, I took a detour — not into tech right away, but into a personal passion: coffee brewing. What started as a hobby grew into a craft. I dove deep into the science of coffee, practiced relentlessly, and eventually competed in several brewing competitions.

                Through that process, I learned how to experiment, analyze, and improve — a mindset that feels surprisingly close to software development. That’s when something clicked.
              </p>
            </div>

            <div className='flex justify-center items-center w-[40%]'>
              <img src={RizCof} alt="Rizky PGN" className='w-[400px] aspect-[16/9] rounded-2xl shadow-lg object-cover'/>
            </div>
          </div>
          
          <div className='flex justify-center items-center gap-x-12'>
            <div className='flex justify-center w-[40%]'>
              <img src={RizPgn} alt="Rizky PGN" className='w-[400px] aspect-[16/9] rounded-2xl shadow-lg object-cover'/>
            </div>
            
            <div className='flex flex-col justify-center items-end w-[50%]'>
              <h2 className='text-3xl font-bold'>Chapter 2 – Code in Progress</h2>
              <p className='mt-[20px] mb-[40px] text-right'>
                In 2024, I began working at PGN, first as a City Gas Sales, then in Sales and Customer Management Representative. These roles taught me about customer empathy and real-world problem solving.

                But behind the scenes, I was diving back into tech. I enrolled in a Full Stack Developer bootcamp, started building apps, earned a professional certificate on Coursera. I’ve been learning JavaScript, React, and Tailwind — and loving the challenge of turning ideas into working software.
              </p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-x-12'>   
            <div className='flex flex-col justify-center items-start w-[50%]'>
              <h2 className='text-3xl font-bold'>Chapter 3 – Building What’s Next</h2>
              <p className='mt-[20px] mb-[40px] text-left'>
                I’m now ready to step fully into the world of software development. My goal is to become a strong full-stack developer — someone who writes clean, thoughtful code and never stops learning.

                I believe the same curiosity and discipline that carried me through brewing competitions and bootcamps will drive me as a developer. Whether it’s building user-focused apps, solving backend challenges, or learning new stacks, I’m excited to keep growing — one commit at a time.
              </p>
            </div>

            <div className='flex justify-center w-[40%]'>
              <img src={RizCod} alt="Rizky PGN" className='w-[400px] aspect-[16/9] rounded-2xl shadow-lg object-cover'/>
            </div>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center w-full min-h-screen snap-start gap-14'>
          <h2 className='text-5xl mb-8'>Experience</h2>

          <div className='flex flex-col justify-between items-center w-[60%]'>
            <div className='flex justify-between items-center w-full'>
              <h3>PT. Pertamina Gas Negara - SCM Representative</h3>
              <h3>April 2025 - Present</h3>
            </div>
            <p className='w-full text-base mt-[20px] mb-[40px] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className='flex flex-col justify-between items-center w-[60%]'>
            <div className='flex justify-between items-center w-full'>
              <h3>PT. Pertamina Gas Negara - Sales CityGas</h3>
              <h3>Juni 2024 - April 2025</h3>
            </div>
            <p className='w-full text-base mt-[20px] mb-[40px] text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          
        </section>


        <section className='flex justify-center items-center min-h-screen snap-start gap-24'>
          <div className='flex flex-col w-[40%] gap-7'>
            <h2 className='text-5xl font-bold'>What My Programming Skills Included?</h2>
            <p className='text-xl'>I specialize in building clean, intuitive, and responsive user interfaces that enhance user experience and streamline tasks using modern web technologies.</p>
          </div>
          
          <div className='flex flex-wrap w-[50%] justify-center items-center gap-6'>
            <Skills text={'HTML'}>
              <FontAwesomeIcon icon="fa-brands fa-html5" className={iconSize} />
            </Skills>
            <Skills text={'CSS'}>
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" className={iconSize} />
            </Skills>
            <Skills text={'Javascript'}>
              <FontAwesomeIcon icon="fa-brands fa-js" className={iconSize} />
            </Skills>
            <Skills text={'npm'}>
              <FontAwesomeIcon icon="fa-brands fa-npm" className={iconSize} />
            </Skills>
            <Skills text={'Tailwind'}>
              <img src={Tailwind} className='w-[48px]' />
            </Skills>
            <Skills text={'React JS'}>
              <FontAwesomeIcon icon="fa-brands fa-react" className={iconSize} />
            </Skills>
          </div>
        </section>
      </Main>
      <Footer></Footer>
    </>
  )
}

export default About
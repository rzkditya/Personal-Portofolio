import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='outline outline-blue-500 w-full flex justify-center items-center py-[20px] px-[10%] text-lg text-muted-mauve z-100'>
        <div className='absolute left-[10%] flex gap-4'>
          <Link to='https://www.linkedin.com/in/mrizkyadityautama/'><FontAwesomeIcon icon="fa-brands fa-linkedin" className='text-2xl' /></Link>
          <Link to='https://github.com/rzkditya'><FontAwesomeIcon icon="fa-brands fa-github" className='text-2xl' /></Link>
        </div>

        <div className='text-base font-semibold'>Designed & coded by <span className='text-riz-300'>RZKDITYA</span> – 2025 </div>
    </footer>
  )
}

export default Footer
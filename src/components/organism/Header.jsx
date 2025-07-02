import { Link } from 'react-router-dom'
import MRAU from '../../assets/MRAU-Logo.svg'

const navLink = 'transition-transform hover:scale-110'

const Header = () => {
  return (
    <div className='relative z-50 group'>
      <div className="fixed top-0 left-0 w-full h-[40px] z-40 hover:group-hover:block" />

      <div className="fixed top-0 left-0 w-full h-[40px] z-40 flex justify-center items-center">
        <div className="w-[40px] h-[4px] bg-gray-400 rounded-full opacity-60 hover:opacity-100 transition" /></div>

      <header className='fixed top-0 left-0 w-full py-[20px] px-[10%] bg-transparent backdrop-blur-sm text-strong-dark-navy font-medium text-lg z-50 transition-transform duration-300 -translate-y-full group-hover:translate-y-0 '>
          <div className="flex justify-between items-center">
            <Link to="/Home" className='hover:rotate-360 transition duration-1000'><img src={MRAU} alt="Header Icon" className='h-9' /></Link>

            <nav className='flex gap-[35px]'>
                <Link to="/Home" className={navLink}>HOME</Link>
                <Link to="/About" className={navLink}>ABOUT</Link>
                <Link to="/Portfolio" className={navLink}>PORTFOLIO</Link>
            </nav>
          </div>
      </header>
    </div>
  )
}

export default Header
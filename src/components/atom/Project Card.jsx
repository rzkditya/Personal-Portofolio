import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const ProjectCard = ({img, text, children, link, techStack}) => {
  return (
    <div className='relative flex flex-col justify-start items-center aspect-[5/6] min-w-80 max-w-100 pt-6 pb-14 px-6 gap-2 rounded-lg bg-soft-purple/80 shadow-lg text-deep-navy cursor-pointer hover:scale-105 hover:bg-indigo-900 hover:text-purple-100 transition'>
        <img src={img} alt="Project Image" className='w-100 aspect-[3/2] rounded-lg object-cover'/>
        <div className='self-start mt-4 text-xl font-bold'>{text}</div>
        <div className='self-start text-left'>{children}</div>

        {techStack && (
        <div className='self-start text-sm font-medium italic mb-2'>
          {techStack}
        </div>
      )}

        <Link to={link} className='absolute bottom-4 left-6 text-muted-mauve'><FontAwesomeIcon icon="fa-brands fa-github" className='text-xl' /></Link>
    </div>


  )
}

export default ProjectCard
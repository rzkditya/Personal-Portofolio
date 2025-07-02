import ProjectCard from "../atom/Project Card"
import Main from "../layout/Main"
import Footer from "../organism/Footer"
import Header from "../organism/Header"
import RizCod from '../../assets/Rizky-Code.jpg'

import ToDo from '../../assets/ToDoList.svg'
import ChillV1 from '../../assets/ChillV1.svg'


const Project = () => {
  return (
    <>
        <Header/>
        <Main className='flex flex-col justify-center items-center gap-6'>
          <h1>Portfolio</h1>
          <section className='flex justify-center items-center gap-6'>
            <ProjectCard text='Chill - Video Stream' img={ChillV1} link='https://github.com/rzkditya/Chill-Static' techStack='HTML, CSS'>A Netflix-style video streaming app. Features a premium-style UI showcasing movies, shows, and more. All in a responsive layout.</ProjectCard>
            <ProjectCard text='Dit To Do Dit' img={ToDo} link='https://github.com/rzkditya/DitToDoDit' techStack='HTML, CSS, JavaScript'>A clean and responsive To-Do list app. Manage tasks easily across devices with a minimalist design and local storage support.</ProjectCard>
          </section>
        </Main>
        <Footer/>
    </>
  )
}

export default Project
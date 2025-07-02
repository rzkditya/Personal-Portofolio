import ProjectCard from "../atom/Project Card"
import Main from "../layout/Main"
import Footer from "../organism/Footer"
import Header from "../organism/Header"
import RizCod from '../../assets/Rizky Code.jpg'


const Project = () => {
  return (
    <>
        <Header/>
        <Main className='flex justify-center items-center gap-6'>
            <ProjectCard text='To Do List' img={RizCod}>Selling various Premium Applications such as video streaming, music, design, editing, education, and more.</ProjectCard>
            <ProjectCard text='To Do List' img={RizCod}></ProjectCard>
            <ProjectCard text='To Do List' img={RizCod}></ProjectCard>
        </Main>
        <Footer/>
    </>
  )
}

export default Project
import Skills from "../organism/Skills";
import Sidebar from "../molecule/Sidebar";
import NavMenu from "../atom/NavMenu";
import ExperienceLayout from "../layout/ExperienceLayout";
import Academic from "../organism/Academic";
import Experience from "../organism/Experience";

const Career = () => {
  return (
    <ExperienceLayout>
      <NavMenu />
      <Skills />
      <Experience />
      <Academic />
      <Sidebar></Sidebar>
    </ExperienceLayout>
  );
};

export default Career;

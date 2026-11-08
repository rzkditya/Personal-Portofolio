import Skills from "../organism/Skills";
import Sidebar from "../molecule/Sidebar";
import NavMenu from "../atom/NavMenu";
import ExperienceLayout from "../layout/ExperienceLayout";
import Academic from "../organism/Academic";

const Experience = () => {
  return (
    <ExperienceLayout>
      <NavMenu />
      <Skills />
      <Academic />
      <Sidebar></Sidebar>
    </ExperienceLayout>
  );
};

export default Experience;

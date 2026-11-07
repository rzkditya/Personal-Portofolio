import React from "react";
import SkillsIcon from "../atom/SkillsIcon.jsx";
import { skillsData } from "../../datas/TechSkills.js";

const Skills = () => {
  return (
    <div className="flex flex-col w-full h-full p-8">
      <div className="flex flex-col w-full h-[25%]">
        <h1 className="tracking-tighter">SKILLS</h1>
        <div className="w-fit px-2 text-lg bg-accent-blue">
          Technical Skills
        </div>
      </div>
      <p>
        Here are the technologies I Work with to architect reliable systems and
        digital products.
      </p>
      <div className="flex gap-4 mt-4">
        {skillsData.map((skill, index) => (
          <SkillsIcon key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

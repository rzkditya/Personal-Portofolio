import React from "react";
import SkillsIcon from "../atom/SkillsIcon.jsx";
import { skillsData } from "../../datas/TechSkills.js";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end py-8 mb-8">
      <div className="md:col-span-6">
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          01 / Capabilities
        </span>
        <h1 className="md:text-7xl tracking-tighter uppercase mb-4">skills</h1>
        <div className="w-fit px-2 text-lg text-white bg-accent-blue">
          Technical Skills
        </div>
      </div>
      <div className="md:col-span-6">
        <p className="text-md mb-4">
          Here are the technologies I Work with to architect reliable systems
          and digital products.
        </p>
        <div className="flex flex-wrap gap-4">
          {skillsData.map((skill, index) => (
            <SkillsIcon key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

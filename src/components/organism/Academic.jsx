import React from "react";
import SkillsIcon from "../atom/SkillsIcon.jsx";
import { skillsData } from "../../datas/TechSkills.js";

const Academic = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end py-8">
      <div className="md:col-span-6">
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          03 / Academic
        </span>
        <h2 className="md:text-7xl tracking-tighter uppercase mb-4">
          Education
        </h2>
        <div className="w-full px-2 text-lg mb-4">
          <div className="flex justify-between items-center">
            <h3>Harisenin.com</h3>
            <span className="text-sm">March - August 2025</span>
          </div>
          <div className="text-accent-blue text-md font-semibold">
            Fullstack Developer Bootcamp
          </div>
          <div className="text-sm">
            HTML, CSS, JavaScript, React.js, TailWind.css
          </div>
        </div>
        <div className="w-full px-2 text-lg">
          <div className="flex justify-between items-center">
            <h3>Universitas Sriwijaya</h3>
            <span className="text-sm">2017-2022</span>
          </div>
          <div className="text-accent-blue text-md font-semibold">
            Bachelors of Computer Systems
          </div>
          <div className="text-sm">
            HTML, CSS, JavaScript, React.js, TailWind.css
          </div>
          <p></p>
        </div>
      </div>
      <div className="md:col-span-6">
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          04 / Works
        </span>
        <h1 className="md:text-7xl tracking-tighter uppercase mb-4">
          Portfolio
        </h1>
        <div className="w-fit px-2 text-lg text-white bg-accent-blue">
          Technical Skills
        </div>
      </div>
    </div>
  );
};

export default Academic;

import React from "react";
import PortfolioCard from "../atom/PortfolioCard";
import ExperienceList from "../atom/ExperienceList";
import { experienceData } from "../../datas/TechSkills";

const Experience = () => {
  return (
    <div className="grid gap-6 items-start border-t-3 border-gray-400/50 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mt-8">
        <div className="md:col-span-6">
          <span className="text-gray-400 uppercase">02 / Career Record</span>
          <h2 className="text-7xl uppercase">Experience</h2>
        </div>
        <div className="md:col-span-6 flex justify-end items-center">
          <div className="flex justify-start items-center w-fit bg-gray-300 px-4 py-1 border border-gray-400/50 gap-4 text-black/80">
            <p className="text-sm">Filter:</p>
            <div className="flex gap-2">
              <div className="flex justify-center items-center mx-auto w-20 px-2 py-1 text-xs uppercase hover:text-white hover:bg-black transition duration-300s">
                All Roles
              </div>
              <div className="flex justify-center items-center mx-auto w-20 px-2 py-1 text-xs  uppercase hover:text-white hover:bg-black transition duration-300">
                Frontend
              </div>
              <div className="flex justify-center items-center mx-auto w-20 px-2 py-1 text-xs  uppercase hover:text-white hover:bg-black transition duration-300">
                Backend
              </div>
              <div className="flex justify-center items-center mx-auto w-20 px-2 py-1 text-xs  uppercase hover:text-white hover:bg-black transition duration-300">
                Operation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-gray-400/50 pt-8">
        <div className="md:col-span-4">-</div>
        <div className="md:col-span-8 w-full space-y-8">
          {experienceData.map((exp, index) => (
            <ExperienceList
              key={index}
              category={exp.category}
              number={index + 1}
              location={exp.location}
              dates={exp.dates}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              skills={exp.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

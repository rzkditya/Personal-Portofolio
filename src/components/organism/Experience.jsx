import React from "react";
import PortfolioCard from "../atom/PortfolioCard";
import ExperienceList from "../atom/ExperienceList";

const Experience = () => {
  return (
    <div className="grid grid-rows-2 gap-6 items-start py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-6">
          <span className="text-gray-400 uppercase">02 / Career Record</span>
          <h2 className="text-7xl uppercase">Experience</h2>
        </div>
        <div className="md:col-span-6">Filter</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 border-t border-black pt-8">
        <div className="md:col-span-4 bg-accent-blue w-full">-</div>
        <div className="md:col-span-8 w-full">
          <ExperienceList></ExperienceList>
        </div>
      </div>
    </div>
  );
};

export default Experience;

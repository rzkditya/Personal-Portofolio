import React from "react";

const ExperienceList = () => {
  return (
    <div>
      <div className="grid grid-cols-12 pr-4">
        <div className="col-span-4 ">
          <div className="w-fit text-xs uppercase bg-gray-300 border border-gray-400/50 px-2 py-1">
            Corporate - 01
          </div>
        </div>
        <div className="col-span-8 flex justify-end items-center text-xs">
          Palembang, Indonesia
          <span className="font-semibold">. Apr 2024 - Present</span>
        </div>
      </div>
      <div className="mt-2">
        <div>
          <h3 className="text-3xl font-bold">
            Sales & Customer Management Rep.
          </h3>
          <span className="text-accent-blue font-bold">
            PT Perusahaan Gas Negara Tbk (PGN)
          </span>
        </div>
      </div>
      <div className="text-sm mt-2">
        <p>
          Managing high-volume commercial & residential customer accounts
          through direct field visits, technical complaint resolution, and
          data-driven gas consumption modeling.
        </p>
        <div className="mt-2">
          <div className="w-fit text-xs tracking-wider bg-gray-200 border border-gray-400/50 px-2 py-1">
            Tailwind Css
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;

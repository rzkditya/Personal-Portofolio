import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExperienceList = ({
  category,
  number,
  location,
  dates,
  title,
  company,
  description,
  skills,
}) => {
  return (
    <div className="border-b border-gray-400/50 pb-8">
      <div className="grid grid-cols-12 pr-4">
        <div className="col-span-4 ">
          <div className="w-fit text-xs uppercase bg-gray-300 border border-gray-400/50 px-2 py-1">
            {category} - 0{number}
          </div>
        </div>
        <div className="col-span-8 flex justify-end items-center text-xs">
          <FontAwesomeIcon icon="fa-solid fa-map-pin" className="mr-1" />
          {location}
          <FontAwesomeIcon
            icon="fa-solid fa-circle"
            size="2xs"
            className="mx-4"
          />
          <span className="font-bold">
            <FontAwesomeIcon icon="fa-solid fa-calendar" className="mr-1" />
            {dates}
          </span>
        </div>
      </div>
      <div className="mt-2">
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <span className="text-accent-blue font-bold">{company}</span>
        </div>
      </div>
      <div className="text-sm mt-2">
        <p>{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              className="w-fit text-xs tracking-wider bg-gray-200 border border-gray-400/50 px-2 py-1"
              key={index}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;

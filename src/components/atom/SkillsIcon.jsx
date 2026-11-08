import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsIcon = ({ icon, name }) => {
  return (
    <div className="flex justify-center items-center w-fit gap-2 px-2.5 py-1 bg-gray-300/60 border border-gray-400/50 shadow-lg text-gray-800 cursor-pointer hover:scale-105 hover:bg-accent-blue hover:text-white transition">
      <FontAwesomeIcon icon={icon} size="lg" />
      <div className="text-sm">{name}</div>
    </div>
  );
};

export default SkillsIcon;

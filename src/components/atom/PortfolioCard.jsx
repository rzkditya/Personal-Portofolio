import React from "react";

const PortfolioCard = () => {
  return (
    <div className="flex flex-col border border-gray-400/50 p-4">
      <div className="aspect-video bg-slate-500 flex justify-center items-center text-white mb-2">
        Project Demo Preview
      </div>
      <h3 className="text-xl font-bold mb-2">Project Title</h3>
      <span className="text-md mb-4">Project Description</span>
      <span className="text-xs uppercase">Tech Stack</span>
    </div>
  );
};

export default PortfolioCard;

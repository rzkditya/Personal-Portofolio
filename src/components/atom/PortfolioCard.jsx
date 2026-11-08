import React from "react";

const PortfolioCard = () => {
  return (
    <div className="flex flex-col border border-gray-400/50 p-4">
      <div className="aspect-video bg-slate-500">Demo Preview</div>
      <h3>Project Title</h3>
      <span className="mb-4">Project Description</span>
      <span className="text-xs uppercase">Tech Stack</span>
    </div>
  );
};

export default PortfolioCard;

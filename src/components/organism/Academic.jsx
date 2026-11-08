import React from "react";
import PortfolioCard from "../atom/PortfolioCard";

const Academic = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start py-8">
      <div className="md:col-span-6">
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          03 / Academic
        </span>
        <h2 className="md:text-7xl tracking-tighter uppercase mb-8">
          Education
        </h2>

        <div className="space-y-6">
          <div className="border-b border-gray-400/50 pb-4">
            <div className="flex justify-between items-baseline">
              <h3>Harisenin.com</h3>
              <span className="text-sm">March - August 2025</span>
            </div>
            <p className="text-accent-blue text-md font-semibold">
              Full-stack Developer Bootcamp
            </p>
            <p className="text-sm">
              React.js, Tailwind CSS, JavaScript ES6+, Full-Stack Web
              Development.
            </p>
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <h3>Universitas Sriwijaya</h3>
              <span className="text-sm">2017-2022</span>
            </div>
            <p className="text-accent-blue text-md font-semibold">
              Bachelors of Computer Systems
            </p>
            <p className="text-sm">
              Application Development, Data Structures and Programming
              Algorithms.
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-span-6 border-l-0 md:border-l border-gray-400 pl-8">
        <span className="text-sm text-gray-400 tracking-widest uppercase">
          04 / Works
        </span>
        <h1 className="md:text-7xl tracking-tighter uppercase mb-8">
          Portfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PortfolioCard></PortfolioCard>
        </div>
      </div>
    </div>
  );
};

export default Academic;

import React from "react";

const NavCard = ({ text = "default", img = "BG_Home" }) => {
  return (
    <div className="relative w-40 sm:w-100 h-30 sm:h-44 rounded-lg bg-amber-200 outline-6 sm:outline-10 outline-background-1 overflow-hidden">
      <img
        src={`/images/${img}.jpg`}
        alt="Card Picture"
        className="absolute inset-0 w-full h-full object-cover blur-[2px]"
      />
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white">
        {text}
      </div>
    </div>
  );
};

export default NavCard;

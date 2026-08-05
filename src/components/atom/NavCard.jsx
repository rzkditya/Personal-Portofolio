import React from "react";

const NavCard = ({ text = "default", img = "BG_Home" }) => {
  return (
    <div className="relative w-40 sm:w-54 lg:w-84 h-30 sm:h-110 lg:h-140 rounded-lg outline-6 sm:outline-8 outline-white overflow-hidden z-99">
      <img
        src={`/images/${img}.jpg`}
        alt="Card Picture"
        className="absolute inset-0 w-full h-full object-cover blur-[2px]"
      />
      <div className="absolute bottom-2 left-2 sm:bottom-[25%] sm:left-4 sm:w-28 lg:w-40 line-clamp-2 break-all leading-7 text-white">
        {text}
      </div>
    </div>
  );
};

export default NavCard;

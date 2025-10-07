import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  let iconStyle = "transform -rotate-90 hover:text-accent-blue transition";
  let iconSize = "lg";
  return (
    <div className="absolute flex flex-col justify-center items-center gap-4 sm:gap-8 left-0 sm:bottom-0 w-8 sm:w-10 h-[40%] sm:h-[60%] bg-white p-2 z-50 ">
      {/* Social Icons */}
      <div className="flex flex-col text-pink-400 gap-2 sm:gap-6">
        <a href="https://www.linkedin.com/in/mrizkyadityautama/">
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            size={iconSize}
            className={iconStyle}
          />
        </a>
        <a href="https://github.com/rzkditya">
          <FontAwesomeIcon
            icon="fa-brands fa-github"
            size={iconSize}
            className={iconStyle}
          />
        </a>
        <a href="https://www.instagram.com/rzkditya">
          <FontAwesomeIcon
            icon="fa-brands fa-instagram"
            size={iconSize}
            className={iconStyle}
          />
        </a>
      </div>

      {/* Text */}
      <div className="text-xs sm:text-sm font-bold rotate-180 [writing-mode:vertical-rl]">
        Design & Coded by{" "}
        <span className="text-pink-400 font-bold hover:text-accent-blue transition">
          RZKDITYA
        </span>{" "}
        - 2025
      </div>
    </div>
  );
};

export default Sidebar;

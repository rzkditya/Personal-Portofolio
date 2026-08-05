import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavCard from "./NavCard";

const NavIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-display tracking-tightest">
      <div
        className="absolute flex justify-center items-center top-0 right-0 w-10 h-10 bg-accent-blue cursor-pointer z-100"
        onClick={() => setOpen(!open)}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          style={{ color: "#ffffff" }}
          size="xl"
        />
      </div>

      <div
        className={`absolute top-0 left-0 w-screen h-screen p-2 sm:p-12 bg-accent-blue z-[99] 
          transform transition-all duration-300 ease-in-out
          ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="absolute top-0 left-0 w-screen h-screen p-2 sm:p-18 bg-background-1 overflow-hidden z-99">
          <div className="flex flex-col items-center justify-start w-full h-full sm:gap-20 lg:gap-40">
            <div className="absolute sm:-left-30 lg:-left-20 sm:scale-50 lg:scale-80 opacity-30 z-0">
              <NavCard text=" " img="Card_1" />
            </div>
            <ul className="flex flex-wrap justify-between items-end sm:h-[70%] lg:h-[60%] sm:w-180 lg:w-280 text-2xl sm:text-2xl lg:text-4xl font-semibold">
              <li>
                <HashLink to="/about#chapter_one">
                  <NavCard text="CHAPTER ONE" img="Card_1" />
                </HashLink>
              </li>
              <li>
                <HashLink to="/about#chapter_two">
                  <NavCard text="CHAPTER TWO" img="Card_2" />
                </HashLink>
              </li>
              <li>
                <HashLink to="/about#chapter_three">
                  <NavCard text="CHAPTER THREE" img="Card_3" />
                </HashLink>
              </li>
            </ul>
            <ul className="flex justify-between items-start sm:h-[30%] lg:h-[40%] sm:w-180 lg:w-280 text-5xl sm:text-lg lg:text-2xl text-black font-bold">
              <li className="flex justify-center w-50 p-4 rounded-lg bg-white">
                <Link to={"/Home"}>HOME</Link>
              </li>
              <li className="flex justify-center w-50 p-4 rounded-lg bg-white">
                <Link to={"/About"}>ABOUT ME</Link>
              </li>
              <li className="flex justify-center w-50 p-4 rounded-lg bg-white">
                <Link to={"/Experience"}>EXPERIENCES</Link>
              </li>
              <li className="flex justify-center w-50 p-4 rounded-lg bg-white">
                <Link to={"/Contact"}>CONTACT</Link>
              </li>
            </ul>

            <div className="absolute sm:-right-30 lg:-right-20 sm:scale-50 lg:scale-80 opacity-30 z-0">
              <NavCard text=" " img="Card_3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavIcon;

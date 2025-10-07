import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavCard from "./NavCard";

const NavIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="font-display">
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
      {open && (
        <div className="absolute top-0 left-0 w-screen h-screen p-2 sm:p-12 bg-accent-blue z-99">
          <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 w-full h-full">
            <ul className="flex flex-col justify-center items-center text-5xl sm:text-7xl text-background-1 font-bold tracking-tighter gap-6 sm:gap-8">
              <li>
                <Link>HOME</Link>
              </li>
              <li>
                <Link>ABOUT ME</Link>
              </li>
              <li>
                <Link>EXPERIENCES</Link>
              </li>
              <li>
                <Link>CONTACT</Link>
              </li>
            </ul>
            <ul className="flex sm:flex-col flex-wrap justify-center items-start sm:items-center gap-10 text-2xl sm:text-4xl font-semibold tracking-tight ">
              <li>
                <NavCard text="CHAPTER ONE" img="Card_1" />
              </li>
              <li>
                <NavCard text="CHAPTER TWO" img="Card_2" />
              </li>
              <li>
                <NavCard text="CHAPTER THREE" img="Card_3" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavIcon;

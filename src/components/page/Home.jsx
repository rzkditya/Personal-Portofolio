import React from "react";
import BG_Image from "../../assets/BG_Home.jpg";
import Hero_Image from "../../assets/Hero_Image.png";
import Home_Accent from "../../assets/Home_Accent.png";
import Sidebar from "../molecule/Sidebar";
import NavIcon from "../atom/NavIcon";

const Home = () => {
  return (
    <>
      <main className="flex w-full h-screen font-display overflow-hidden">
        <div className="grid grid-cols-2 w-full z-1">
          {/* Image background */}
          <div className="relative flex">
            <img
              src={BG_Image}
              alt="BG_Image"
              className="invisible sm:visible  h-50 bottom-0 sm:h-145 opacity-75"
            />
            <img
              src={Hero_Image}
              alt="Hero Image"
              className="absolute top-[20%] left-[50%] sm:top-6 sm:left-60 scale-200 sm:scale-136 overflow-hidden"
            />
          </div>

          {/* Intro text */}
          <div className="sm:relative flex text-black w-full h-full">
            <div className="absolute flex flex-col bottom-70 left-15 w-100 sm:top-30 sm:left-26 sm:w-120 bg-cover bg-top bg-[url('/images/BG_Home.jpg')] sm:bg-none py-2 px-4 rounded-lg ">
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] rounded-lg sm:hidden"></div>

              {/* Content */}
              <div className="relative z-10">
                <h1 className="text-wrap text-6xl/12 sm:text-8xl/18 tracking-tight sm:tracking-wide">
                  M RIZKY ADITYA U
                </h1>
                <h3 className="text-xl font-bold">Full-Stack Developer</h3>
              </div>
            </div>

            <p className="absolute bottom-15 left-10 sm:bottom-30 sm:left-70 w-[300px] text-sm sm:text-base font-bold italic">
              From brewing coffee to building software. I bring a hands-on
              mindset and love for learning into every project. With a degree in
              Computer Systems and experience at PT Pertamina Gas Negara in
              sales and customer service, I'm now diving deep into full-stack
              development through Harisenin Bootcamp and Meta's Front-End
              program on Coursera. Currently building real-world apps with React
              and Tailwind.
            </p>
          </div>
        </div>
        <img
          src={Home_Accent}
          alt="Accent"
          className="absolute top-0 right-0 w-100 h-100 z-0"
        />
        <NavIcon></NavIcon>
        <Sidebar></Sidebar>
      </main>
    </>
  );
};

export default Home;

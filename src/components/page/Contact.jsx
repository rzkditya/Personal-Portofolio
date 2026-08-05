import React from "react";
import NavIcon from "../atom/NavIcon";
import Sidebar from "../molecule/Sidebar";
import Main from "../layout/Main";
import Contact_img from "../../assets/Contact_Img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  let inputStyle = "outline-2 rounded-sm px-2";
  return (
    <>
      <NavIcon />
      <Main className="relative flex flex-col">
        <div className="flex flex-col w-full h-full p-8">
          <section className="flex flex-col w-full h-[30%]">
            <div className="self-end text-[144px] font-display font-semibold tracking-tighter">
              CONTACT ME
            </div>
          </section>
          <section className="flex w-full h-full">
            <div className="flex w-[30%] justify-center px-8 pt-18">
              <img
                src={Contact_img}
                alt="Contact Img"
                className="w-96 h-120 object-cover opacity-50"
              />
            </div>
            <div className="flex flex-col justify-center w-[40%] px-8 gap-14">
              <div className="flex justify-center gap-8">
                <div className="flex flex-col w-full gap-2">
                  <label For="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="border-b-2"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label For="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border-b-2"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col w-full gap-2">
                  <label For="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="border-b-2"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col w-full gap-2">
                  <label For="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="border-b-2"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-accent-blue py-2 px-8 rounded-md text-white hover:bg-accent-blue/80 cursor-pointer"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-start w-[30%] px-8 pt-32 gap-8">
              <div>
                <div className="text-xl font-bold">Based In</div>
                <div>Palembang, Indonesia</div>
              </div>
              <div>
                <div className="text-xl font-bold">Contact</div>
                <div>mrizkyadityautama@gmail.com</div>
              </div>
              <div>
                <div className="text-xl font-bold">Freelance</div>
                <div>Available</div>
              </div>
            </div>
          </section>
        </div>
      </Main>
      <Sidebar />
    </>
  );
};

export default Contact;

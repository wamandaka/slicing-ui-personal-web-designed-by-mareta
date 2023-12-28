import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex justify-between items-center h-20 fixed top-0 left-0 px-8 w-full z-50 bg-white backdrop-blur-sm bg-opacity-5">
        <h1 className="font-plaster text-5xl sm:text-7xl bg-gradient-to-br from-[#2d5cd7] to-[#cf92ff] bg-clip-text text-transparent">
          <a href="#">m</a>
        </h1>
        <ul className="hidden gap-7 sm:flex text-[20px] text-white">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#socmed">Connect</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </nav>
      <div
        className={
          nav
            ? "menu bg-base-200 rounded-xl fixed top-28 right-10 z-50 bg-opacity-50 transition duration-500"
            : "fixed -top-full -left-full"
        }
      >
        <ul className="flex flex-col h-full px-7 py-2 gap-4 text-white items-center w-full backdrop-blur-sm bg-opacity-5">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#socmed">Connect</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

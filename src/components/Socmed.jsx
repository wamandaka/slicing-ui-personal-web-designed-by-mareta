import React from "react";
import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Dribble from "../assets/dribble.png";
import Tiktok from "../assets/tiktok.png";

const Socmed = () => {
  return (
    <>
      <section id="socmed" className=" w-full mx-auto px-4 py-28 bg-[#153B6A]">
        <h1 className="text-3xl text-white font-bold text-center">
          Let’s Connect and Say Hi
        </h1>
        <div className="flex flex-col items-center mt-16 space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 sm:justify-center">
          <div className="w-60 h-60 bg-white bg-opacity-10 rounded-3xl flex flex-col items-start space-y-6 p-5">
            <img src={LinkedIn} alt="" />
            <h1 className="text-2xl text-white font-bold">LinkedIn</h1>
            <a
              href="#"
              className="w-full py-2 text-center bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
            >
              Follow Me
            </a>
          </div>
          <div className="w-60 h-60 bg-white bg-opacity-10 rounded-3xl flex flex-col items-start space-y-6 p-5">
            <img src={Instagram} alt="" />
            <h1 className="text-2xl text-white font-bold">Instagram</h1>
            <a
              href="#"
              className="w-full py-2 text-center bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
            >
              Follow Me
            </a>
          </div>
          <div className="w-60 h-60 bg-white bg-opacity-10 rounded-3xl flex flex-col items-start space-y-6 p-5">
            <img src={Dribble} alt="" />
            <h1 className="text-2xl text-white font-bold">Dribble</h1>
            <a
              href="#"
              className="w-full py-2 text-center bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
            >
              Follow Me
            </a>
          </div>
          <div className="w-60 h-60 bg-white bg-opacity-10 rounded-3xl flex flex-col items-start space-y-6 p-5">
            <img src={Tiktok} alt="" />
            <h1 className="text-2xl text-white font-bold">Tiktok</h1>
            <a
              href="#"
              className="w-full py-2 text-center bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
            >
              Follow Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Socmed;

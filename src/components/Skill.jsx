import React from "react";
import Ts from "../assets/ts.png";
import ReactJS from "../assets/reactjs.svg";
import Html_Css from "../assets/html&css.svg";
import Structure_data from "../assets/structure_data.svg";

const Skill = () => {
  return (
    <>
      <section className=" mx-auto px-4">
        <div className="flex flex-col pt-28">
          <div className="text-center md:flex md:flex-col md:justify-center lg:gap-4 md:w-[50%] md:mx-auto">
            <h1 className="text-3xl text-white font-bold pb-3">Projects</h1>
            <p>
              Practice makes it better, isn't it? I love to share anything
              related to techs such as programming, design, web styling, and
              data structure.
            </p>
          </div>
          <div className="my-24 mx-auto space-y-24 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-20 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-2">
            <div className="w-80 h-80 bg-white bg-opacity-10 rounded-3xl flex flex-col">
              <img
                src={Ts}
                alt=""
                className="rounded-full w-36 mx-auto -translate-y-16"
              />
              <div className="space-y-7 text-center">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#256BF4] to-[#3AC1DE]/100 bg-clip-text text-transparent">
                  10+
                </h1>
                <p className="text-white text-2xl">Typescript</p>
              </div>
            </div>
            <div className="w-80 h-80 bg-white bg-opacity-10 rounded-3xl flex flex-col">
              <img
                src={ReactJS}
                alt=""
                className=" w-36 mx-auto -translate-y-16"
              />
              <div className="space-y-7 text-center">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#256BF4] to-[#3AC1DE]/100 bg-clip-text text-transparent">
                  10+
                </h1>
                <p className="text-white text-2xl">React JS</p>
              </div>
            </div>
            <div className="w-80 h-80 bg-white bg-opacity-10 rounded-3xl flex flex-col">
              <img
                src={Html_Css}
                alt=""
                className=" w-36 mx-auto -translate-y-16"
              />
              <div className="space-y-7 text-center">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#256BF4] to-[#3AC1DE]/100 bg-clip-text text-transparent">
                  10+
                </h1>
                <p className="text-white text-2xl">HTML & CSS</p>
              </div>
            </div>
            <div className="w-80 h-80 bg-white bg-opacity-10 rounded-3xl flex flex-col">
              <img
                src={Structure_data}
                alt=""
                className=" w-36 mx-auto -translate-y-16"
              />
              <div className="space-y-7 text-center">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#256BF4] to-[#3AC1DE]/100 bg-clip-text text-transparent">
                  10+
                </h1>
                <p className="text-white text-2xl">
                  Data Structure & Algorithm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;

import React from "react";
import Hp from "../assets/hp.svg";
import Hp2 from "../assets/hp2.svg";

const ProjectCode = () => {
  return (
    <>
      <section id="project" className="mt-20 bg-[#072852] px-4 mx-auto ">
        <div className="flex flex-col justify-center">
          <div className="text-center md:flex md:flex-col md:justify-center lg:gap-4 md:w-[50%] md:mx-auto">
            <h1 className="text-3xl text-white font-bold items-center my-auto pb-3 pt-10 lg:pb-0 lg:pt-0 lg:text-4xl">
              Code
            </h1>
            <p>
              These are my projects created using HTML, CSS, JavaScript,
              React.js and CMS hub such as HubSpot and WordPress
            </p>
          </div>
          <div className="my-16 mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-20 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-2">
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <div className="bg-white bg-opacity-10 h-56 w-full flex static justify-center">
                  <img
                    src={Hp}
                    alt=""
                    className="absolute -top-5 scale-110 left-6"
                  />
                  <img
                    src={Hp2}
                    alt=""
                    className="absolute -top-5 scale-110 right-6"
                  />
                </div>
              </figure>
              <div className="card-body bg-[#1E4D85] rounded-b-xl text-white text-center h-28">
                <p className="flex items-center justify-center translate-y-3">
                  Husk Charcoal
                </p>
                <div className="card-actions justify-center translate-y-8">
                  <a
                    href="#"
                    className="py-2 px-10 bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
                  >
                    See Detail
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <div className="bg-white bg-opacity-10 h-56 w-full flex static justify-center">
                  <img
                    src={Hp}
                    alt=""
                    className="absolute -top-5 scale-110 left-6"
                  />
                  <img
                    src={Hp2}
                    alt=""
                    className="absolute -top-5 scale-110 right-6"
                  />
                </div>
              </figure>
              <div className="card-body bg-[#1E4D85] rounded-b-xl text-white text-center h-28">
                <p className="flex items-center justify-center translate-y-3">
                  Personal Website
                </p>
                <div className="card-actions justify-center translate-y-8">
                  <a
                    href="#"
                    className="py-2 px-10 bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
                  >
                    See Detail
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <div className="bg-white bg-opacity-10 h-56 w-full flex static justify-center">
                  <img
                    src={Hp}
                    alt=""
                    className="absolute -top-5 scale-110 left-6"
                  />
                  <img
                    src={Hp2}
                    alt=""
                    className="absolute -top-5 scale-110 right-6"
                  />
                </div>
              </figure>
              <div className="card-body bg-[#1E4D85] rounded-b-xl text-white text-center h-28">
                <p className="flex items-center justify-center translate-y-3">
                  Weather App
                </p>
                <div className="card-actions justify-center translate-y-8">
                  <a
                    href="#"
                    className="py-2 px-10 bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
                  >
                    See Detail
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
              <figure>
                <div className="bg-white bg-opacity-10 h-56 w-full flex static justify-center">
                  <img
                    src={Hp}
                    alt=""
                    className="absolute -top-5 scale-110 left-6"
                  />
                  <img
                    src={Hp2}
                    alt=""
                    className="absolute -top-5 scale-110 right-6"
                  />
                </div>
              </figure>
              <div className="card-body bg-[#1E4D85] rounded-b-xl text-white text-center h-28">
                <p className="flex items-center justify-center translate-y-3">
                  Personal Website
                </p>
                <div className="card-actions justify-center translate-y-8">
                  <a
                    href="#"
                    className="py-2 px-10 bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
                  >
                    See Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectCode;

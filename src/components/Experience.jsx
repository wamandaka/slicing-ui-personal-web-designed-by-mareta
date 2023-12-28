import React from "react";
import curve from "../assets/curve.svg";

const Experience = () => {
  return (
    <>
      <section
        id="experience"
        className="w-full flex justify-center overflow-x-auto  mx-auto px-4 pt-28 md:pt-24"
      >
        <div class="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
          <div className="carousel-item">
            <div className="card bg-[#A5CAFF33] carousel-item hover:bg-gradient-to-b from-[#FF7686] to-[#D72F93] hover:scale-105 transition duration-500 h-96">
              <div className="card-body w-60 static">
                <img src={curve} alt="" className="w-20 pt-4 pb-12" />
                <h2 className="card-title text-3xl text-white">UI designer</h2>
                <div className="absolute bottom-5">
                  <h3 className="font-bold ">Tech Company</h3>
                  <p>Sept 2019 - Present</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-[#A5CAFF33] carousel-item hover:bg-gradient-to-b from-[#FF7686] to-[#D72F93] hover:scale-105 transition duration-500 h-96">
              <div className="card-body w-60 static">
                <img src={curve} alt="" className="w-20 pt-4 pb-12" />
                <h2 className="card-title text-3xl text-white">
                  Senior Front-End Developer
                </h2>
                <div className="absolute bottom-5">
                  <h3 className="font-bold">Tech Company</h3>
                  <p>Jan - Aug 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-[#A5CAFF33] carousel-item hover:bg-gradient-to-b from-[#FF7686] to-[#D72F93] hover:scale-105 transition duration-500 h-96">
              <div className="card-body w-60 static">
                <img src={curve} alt="" className="w-20 pt-4 pb-12" />
                <h2 className="card-title text-3xl text-white">
                  Front-End Dev
                </h2>
                <div className="absolute bottom-5">
                  <h3 className="font-bold">Tech Company</h3>
                  <p>Nov 2019 - Jan 2021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-[#A5CAFF33] carousel-item hover:bg-gradient-to-b from-[#FF7686] to-[#D72F93] hover:scale-105 transition duration-500 h-96">
              <div className="card-body w-60 static">
                <img src={curve} alt="" className="w-20 pt-4 pb-12" />
                <h2 className="card-title text-3xl text-white">
                  Front-End Dev{" "}
                </h2>
                <div className="absolute bottom-5">
                  <h3 className="font-bold">Tech Company</h3>
                  <p>Sept - Nov 2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card bg-[#A5CAFF33] carousel-item hover:bg-gradient-to-b from-[#FF7686] to-[#D72F93] hover:scale-105 transition duration-500 h-96">
              <div className="card-body w-60 static">
                <img src={curve} alt="" className="w-20 pt-4 pb-12" />
                <h2 className="card-title text-3xl text-white">UI designer</h2>
                <div className="absolute bottom-5">
                  <h3 className="font-bold">TechnoIT</h3>
                  <p>Jan - Mar 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

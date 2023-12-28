import React from "react";
import imgHero from "../assets/img-hero.png";

const Hero = () => {
  return (
    <>
      <section
        id="about"
        className="flex flex-col-reverse sm:flex-row pt-24 px-4 mx-auto sm:px-16 sm:pt-36 md:px-20"
      >
        <div className="py-5">
          <p className="font-bold mt-3">Mareta Ayu Handanari</p>
          <h1 className="text-4xl py-4 bg-gradient-to-b from-[#FFBDA0] to-[#FF6CD6] bg-clip-text text-transparent font-extrabold">
            Front-end Developer
          </h1>
          <p className="mb-10">
            I design delightful product & code web. I can help everyone build
            their business. it such a happiness for me. so, let me to help you!
          </p>
          <a
            href="#"
            className="py-2 px-7 bg-gradient-to-r from-[#256BF4] to-[#3AC1DE] text-white rounded-full hover:shadow-md hover:shadow-[#3AC1DE] duration-300"
          >
            Contact Me
          </a>
        </div>
        <img src={imgHero} alt="" className="w-[50%] mx-auto drop-shadow-2xl" />
      </section>
    </>
  );
};

export default Hero;

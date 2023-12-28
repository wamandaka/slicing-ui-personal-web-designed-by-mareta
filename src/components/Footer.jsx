import React from "react";
import logo from "../assets/img-hero.png";
import {
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { PiTiktokLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#303049] pt-28  mx-auto px-4 text-white w-full sm:flex sm:pt-0 justify-between sm:px-10 lg:px-16">
          <div className="sm:w-1/2 text-center sm:text-left lg:w-[30%]">
            <img
              src={logo}
              alt=""
              className="w-60 mx-auto mb-5 sm:mx-0 sm:w-32 sm:mt-10"
            />
            <p className="mb-5 ">0888888xxxx</p>
            <p className="mb-10 ">maretacodes@gmail.com</p>
            <div className="flex justify-center space-x-5 sm:justify-start lg:pb-5">
              <a href="">
                <AiOutlineYoutube size={30} />
              </a>
              <a href="">
                <AiOutlineInstagram size={30} />
              </a>
              <a href="">
                <AiOutlineGithub size={30} />
              </a>
              <a href="">
                <PiTiktokLogoLight size={30} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:gap-1 mt-16 justify-items-center sm:w-[40%] lg:grid-cols-4 md:w-full">
            <div className="space-y-3">
              <h1 className="text-2xl text-white font-bold">Group 1</h1>
              <div className="flex flex-col gap-2">
                <a href="">Item 1</a>
                <a href="">Item 2</a>
                <a href="">Item 3</a>
                <a href="">Item 4</a>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl text-white font-bold">Group 2</h1>
              <div className="flex flex-col gap-2">
                <a href="">Item 1</a>
                <a href="">Item 2</a>
                <a href="">Item 3</a>
                <a href="">Item 4</a>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl text-white font-bold">Group 3</h1>
              <div className="flex flex-col gap-2">
                <a href="">Item 1</a>
                <a href="">Item 2</a>
                <a href="">Item 3</a>
                <a href="">Item 4</a>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl text-white font-bold">Group 4</h1>
              <div className="flex flex-col gap-2">
                <a href="">Item 1</a>
                <a href="">Item 2</a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center w-full py-5 text-white">
          Copyrights ⓒ 2023 <span className="text-[#BBC1F4]">Maretacodes</span>
        </p>
      </footer>
    </>
  );
};

export default Footer;

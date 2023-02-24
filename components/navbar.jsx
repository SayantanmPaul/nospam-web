import Image from 'next/image';
import NoSpam from '../public/nospamlogo.svg';
import FontStyles from 'styles/navbar.module.css';
import React, { useState } from 'react';
import defaultstyles from '@/styles/defaultstyles';
import { CgMenuRight } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
const navbar = () => {
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <nav className="left-0 top-0  ease-in duration-300 ">
      <div className=" flex flex-row justify-between  items-center mx-auto 2xl:max-w-[1240px] ">
        <button className=" object-contain lg:h-[40px] h-8 w-auto ">
          <Image src={NoSpam} alt="Logo" width={149} height={40} />
        </button>

        {/* desktop view */}
        <div className="lg:flex hidden gap-6 ml-auto ">
          <a
            href="#"
            className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
          >
            Home
          </a>
          <a
            href="#"
            className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
          >
            About
          </a>
          <a
            href="#"
            className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
          >
            Source Code
          </a>
          <a
            href="#"
            className={`${FontStyles.text} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
          >
            Contact Us
          </a>
          <button>
            <a
              href="#"
              className={`${FontStyles.text2} bg-[#256D85] text-[20px] leading-5 font-normal text-white hover:bg-[#003049] py-[6px] px-6 rounded-3xl duration-300 `}
            >
              Login/SignUp
            </a>
          </button>
        </div>

        {/* mobile and tablet view */}
        <button onClick={handleNav}>
          <div className=" mt-3 lg:hidden block">
            {nav ? (
              <BiDotsHorizontalRounded size={24} color="#256D85" />
            ) : (
              <CgMenuRight size={24} rounded color="#256D85" />
            )}
          </div>
        </button>
        <div
          onClick={handleNav}
          className={
            nav
              ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[65%] h-screen bg-black text-center ease-in duration-300 '
              : 'lg:hidden absolute top-0 left-[-100%] right-[10%] bottom-0 flex justify-center items-center w-[65%] h-screen bg-black text-center ease-in duration-300 '
          }
        >
          <ul>
            <li className="p-4 text-2xl hover:text-[]">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="p-4 text-2xl hover:text-[]">
              <a className="text-white" href="#">
                About
              </a>
            </li>
            <li className="p-4 text-2xl hover:text-[]">
              <a className="text-white" href="https://github.com/SayantanmPaul/nospam-web">
                Source Code
              </a>
            </li>
            <li className="p-4 text-2xl hover:text-[]">
              <a className="text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default navbar;

import Image from 'next/image';
import NoSpam from '../public/nospamlogo.svg';
import FontStyles from 'styles/navbar.module.css';
import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { navVariants } from '@/Utilities/motions';
import Link from 'next/link';

const navbar = () => {
  // avatar images
  const slides = [
    {
      url: 'https://www.linkpicture.com/q/girlimage.png',
    },
    {
      url: 'https://www.linkpicture.com/q/boyimage.png',
    },
  ];
  const [currentIndedx, setCurrentIndex] = useState(0);

  // avatar arrow function
  const prevSlide = () => {
    const isFirstSlide = currentIndedx === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndedx - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndedx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndedx + 1;
    setCurrentIndex(newIndex);
  };

  // slidedot function
  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  //navbar button function
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false' }}
      className="left-0 top-0 "
    >
      <div className=" flex flex-row justify-between  items-center mx-auto 2xl:max-w-[1240px] ">
        <button className=" object-contain h-auto w-40 ">
          <Image src={NoSpam} alt="Logo" width={149} />
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
          <Link rel="preload" href={'/login'} as="LogIn">
            <button>
              <p
                className={`${FontStyles.logintext} bg-[#256D85] text-[20px] leading-5 font-normal text-white hover:bg-[#003049] py-[6px] pt-1 px-6 rounded-3xl duration-300 `}
              >
                Login/SignUp
              </p>
            </button>
          </Link>
        </div>

        {/* mobile and tablet view */}
        <button onClick={handleNav}>
          <div className=" lg:hidden block">
            {nav ? <BiDotsHorizontalRounded size={24} color="#256D85" /> : <CgMenuRight size={24} color="#256D85" />}
          </div>
        </button>
        <div
          onClick={handleNav}
          className={
            nav
              ? ' bg-[#80FFDB] bg-opacity-50  backdrop-blur lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-[75%] h-screen text-center ease-in duration-500 '
              : ' bg-[#80FFDB] bg-opacity-50  backdrop-blur lg:hidden absolute top-0 left-[-100%] right-[10%] bottom-0 flex justify-center  items-center w-[75%] h-screen  text-center ease-in duration-500 '
          }
        >
          <ul className=" flex flex-col items-center">
            {/* cursole for avatars */}

            <div className="max-w-[300px] h-[210px] w-full m-auto relative group ">
              <div
                style={{ backgroundImage: `url(${slides[currentIndedx].url})` }}
                className="w-full h-full bg-center bg-cover duration-500 "
              ></div>

              {/* left arrow */}

              <div className="group-hover:block absolute top-[100%] -translate-x-0  translate-y-[-230%] left-[-40px] text-xl rounded-full p-2 cursor-pointer opacity-25 duration-500">
                <BiChevronLeft onClick={prevSlide} size={30} />
              </div>

              {/* Right arrow */}
              <div className="group-hover:block absolute top-[100%] -translate-x-0  translate-y-[-230%] right-[-40px] text-xl rounded-full p-2 cursor-pointer opacity-25  duration-500">
                <BiChevronRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-3 justify-center">
                {slides.map((slides, slideIndex) => (
                  <div key={slideIndex} onClick={() => gotoSlide(slideIndex)} className=" cursor-pointer ">
                    <RxDotFilled className="opacity-25" />
                  </div>
                ))}
              </div>
            </div>
            <div className="pb-10 pt-4">
              <a style={{ fontFamily: 'Caveat, cursive' }} className="text-2xl font-medium text-[#003049]  ">
                &quot;Hi, Let&#39;s get started&quot;
              </a>
            </div>

            {/* actions section */}
            <li
              className={`${FontStyles.mobilemenutext} text-xl md:text-3xl text-[#2D7D90] hover:text-[#001b49] p-3 md:p-8 duration-300`}
            >
              <a href="#">Home</a>
            </li>
            <li
              className={`${FontStyles.mobilemenutext} text-xl md:text-3xl text-[#2D7D90] hover:text-[#001b49] p-3 md:p-8 duration-300`}
            >
              <a href="#">About</a>
            </li>
            <li
              className={`${FontStyles.mobilemenutext} text-xl md:text-3xl text-[#2D7D90] hover:text-[#001b49] p-3 md:p-8 duration-300`}
            >
              <a href="https://github.com/SayantanmPaul/nospam-web">Source Code</a>
            </li>
            <li
              className={`${FontStyles.mobilemenutext} text-xl md:text-3xl text-[#2D7D90]  hover:text-[#001b49] p-3 md:p-8 duration-300`}
            >
              <a href="#">Contact Us</a>
            </li>
            <div className=" flex flex-col pt-[20%] items-center">
              <Link href={'/login'} as="LogIn">
                <div className="flex flex-row items-center justify-center w-40 md:w-44 pb-1 md:pb- bg-white border-2 border-[#0D4C92]  rounded-full cursor-pointer  border-green hover:bg-[#0D4C92] text-[#0D4C92] hover:text-white duration-300 ">
                  <button className={`${FontStyles.logintext} text-xl md:text-2xl p-1  `}>LogIn/SignUp</button>
                  <FaAngleRight size={22} className="pt-1" />
                </div>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};
export default navbar;

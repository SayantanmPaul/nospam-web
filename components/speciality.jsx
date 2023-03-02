import Image from 'next/image';
import Logo from '../public/nospamlogo.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Predictive from '../public/icon1.png';
import Eazyccess from '../public/icon2.png';
import Clover from '../public/icon3.png';
import OpenSource from '../public/icon4.png';
const specialiy = () => {
  return (
    <>
      <div className=" flex justify-center ">
        {/* heading */}
        <div className=" flex flex-row  justify-center items-center lg:gap-3 gap-2 ">
          <h1
            style={{ fontFamily: 'Gothic A1, sans-serif' }}
            className=" font-black lg:text-4xl w-auto text-[27px] leading-10 text-[#146691] "
          >
            Why Choose
          </h1>
          <div className="lg:w-[41%] w-[42%]">
            <Image src={Logo} alt="logo" width={220} />
          </div>
        </div>
      </div>

      <div className=" py-10">
        <motion.div className="card">
          <div className=" lg:flex-row flex-col  justify-center gap-[10%] grid lg:grid-cols-4 grid-cols-2  ">
            <div className=" flex  flex-col items-center cursor-pointer">
              <Image
                src={Predictive}
                alt="predictive_dataset"
                width={100}
                className="pt-6 hover:w-[60%] duration-300"
              />
              <p
                style={{ fontFamily: 'Sarabun, sans-serif' }}
                className="text-[#0D4C92] uppercase font-extrabold lg:text-base text-sm w-screen text-center p-2"
              >
                highly predective<br></br> datasets
              </p>
            </div>
            <div className=" flex  flex-col justify-center items-center  cursor-pointer">
              <Image src={Eazyccess} alt="predictive_dataset" width={95} className="hover:w-[54%] duration-300" />
              <p
                style={{ fontFamily: 'Sarabun, sans-serif' }}
                className="text-[#0D4C92] uppercase font-extrabold w-auto lg:text-base text-sm text-center p-2"
              >
                easy to access
              </p>
            </div>
            <div className=" flex  flex-col justify-center items-center  cursor-pointer">
              <Image src={Clover} alt="predictive_dataset" width={80} className="hover:w-[45%] duration-300" />
              <p
                style={{ fontFamily: 'Sarabun, sans-serif' }}
                className="text-[#0D4C92] uppercase font-extrabold w-screen lg:text-base text-sm text-center pt-3 "
              >
                free for everyone
              </p>
            </div>
            <div className=" flex  flex-col justify-center items-center  cursor-pointer">
              <Image src={OpenSource} alt="predictive_dataset" width={80} className="pt-8 hover:w-[45%] duration-300" />
              <p
                style={{ fontFamily: 'Sarabun, sans-serif' }}
                className="text-[#0D4C92] uppercase font-extrabold lg:w-auto w-full lg:text-base text-sm text-center p-2"
              >
                designed as open-<br></br>source project
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default specialiy;

import Image from 'next/image';
import React from 'react';
import TanishaGupta from '../public/team/tanishagupta.png';
import SayantaPaul from '../public/team/sayantanpaul.jpeg';
import ShreyaDubey from '../public/team/shreyadubey.jpeg';
import DurgeshGupta from '../public/team/durgeshgupta.jpg';
import AvanniSethia from '../public/team/avanisethia.jpeg';
import DeblinaBanerjee from '../public/team/deblinabanerjee.jpg';
import AboutBackground from '../public/background2.jpg';
import { HiMailOpen } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { textVariant, staggerContainer, fadeIn } from '../Utilities/motions';
import Link from 'next/link';

const TeamCredit = () => {
  return (
    <div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:gap-6 gap-3 lg:pt-6 md:pt-5 pt-3"
      >
        <div className="">
          <motion.h1
            variants={textVariant(0.1)}
            viewport={{ once: 'false' }}
            style={{ fontFamily: 'Fjalla One, sans-serif' }}
            className=" lg:text-5xl md:text-4xl text-[28px]  font-medium lg:leading-10 leading-5 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#2D7D90] to-[#122D42] py-2 "
          >
            Project contributors
          </motion.h1>
        </div>
        <div className="  grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center md:gap-4 gap-3 lg:py-5 md:py-4 py-2 ">
          <motion.div
            variants={textVariant(0.3)}
            viewport={{ once: 'true' }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px' }}
            className=" bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer"
          >
            <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
              <Image
                src={AvanniSethia}
                width={200}
                alt="Avani Sethia"
                className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
              />
            </div>
            <p
              style={({ fontFamily: 'DM Sans, sans-serif' }, { fontWeight: 'bold' })}
              className=" font-bold text-[#6088d9] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
            >
              Avani Sethia
            </p>

            <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
            <div className="flex flex-row lg:gap-2 md:gap-2 gap-1 lg:pb-5 md:pb-5 pb-1 justify-center items-center">
              <Link href={'mailto:aavani.sethia1504@gmail.com'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/avani-sethia-84b64621b'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(0.5)}
            viewport={{ once: 'true' }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px' }}
            className=" bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer"
          >
            <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
              <Image
                src={DeblinaBanerjee}
                width={200}
                alt="Deblina Banerjee"
                className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
              />
            </div>
            <p
              style={({ fontFamily: 'DM Sans, sans-serif' }, { fontWeight: 'bold' })}
              className=" font-bold text-[#2D70F3] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
            >
              Deblina Banerjee
            </p>

            <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
            <div className="flex flex-row lg:gap-2 md:gap-2 gap-1 lg:pb-5 md:pb-5 pb-1 justify-center items-center">
              <Link href={'mailto:deblinabanerjee780@gmail.com'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/deblina-banerjee-231290206'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(0.7)}
            viewport={{ once: 'true' }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px' }}
            className=" bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer"
          >
            <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
              <Image
                src={ShreyaDubey}
                width={200}
                alt="Shreya Dubey"
                className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
              />
            </div>
            <p
              style={({ fontFamily: 'DM Sans, sans-serif' }, { fontWeight: 'bold' })}
              className=" font-bold text-[#2D70F3] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
            >
              Shreya Dubey
            </p>

            <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
            <div className="flex flex-row lg:gap-2 md:gap-2 gap-1 lg:pb-5 md:pb-5 pb-1 justify-center items-center">
              <Link href={'mailto:dubeyshreya05@gmail.com'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/shreya-dubey-a03b2a232/'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(0.9)}
            viewport={{ once: 'true' }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px' }}
            className=" bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer"
          >
            <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
              <Image
                src={TanishaGupta}
                width={200}
                alt="Tanisha Gupta"
                className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
              />
            </div>
            <p
              style={({ fontFamily: 'DM Sans, sans-serif' }, { fontWeight: 'bold' })}
              className=" font-bold text-[#2D70F3] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
            >
              Tanisha Gupta
            </p>

            <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
            <div className="flex flex-row lg:gap-2 md:gap-2 gap-1 lg:pb-5 md:pb-5 pb-1 justify-center items-center">
              <Link href={'mailto:tanishagupta1234.college@gmail.com'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/tanisha-gupta-a81158210'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(1.3)}
            viewport={{ once: 'true' }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px' }}
            className=" lg:col-start-2 lg:col-end-3 bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer"
          >
            <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
              <Image
                src={DurgeshGupta}
                width={200}
                alt="Durgesh Gupta"
                className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
              />
            </div>
            <p
              style={({ fontFamily: 'DM Sans, sans-serif' }, { fontWeight: 'bold' })}
              className=" font-bold text-[#2D70F3] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
            >
              Durgesh Gupta
            </p>

            <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
            <div className="flex flex-row lg:gap-2 md:gap-2 gap-1 lg:pb-5 md:pb-5 pb-1 justify-center items-center">
              <Link href={'mailto:dg13974@gmail.com'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/durgesh-gupta-66017811a/'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={textVariant(1.5)}
            viewport={{ once: 'true' }}
            style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px' }}
            className=" lg:col-start-3 lg:col-end-4 bg-white lg:rounded-2xl md:rounded-2xl rounded-xl flex flex-col justify-center items-center lg:pt-8 md:pt-8 pt-4  lg:px-5 md:px-5 px-3 border-2 border-green-300 hover:border-[#8082fa] duration-500 cursor-pointer"
          >
            <div className=" rounded-full overflow-hidden border-2 border-[#00CC76] ">
              <Image
                src={SayantaPaul}
                width={200}
                alt="Sayantan Paul"
                className=" lg:w-[90px] md:w-[90px] w-[70px] rounded-full p-1"
              />
            </div>
            <p
              style={({ fontFamily: 'DM Sans, sans-serif' }, { fontWeight: 'bold' })}
              className=" font-bold text-[#2D70F3] leading-8 text-center w-[180px] lg:text-base md:text-base text-sm  lg:pt-5 md:pt-5 pt-1  tracking-normal "
            >
              Sayantan Paul
            </p>

            <div className="w-full h-[1px] bg-[#2D70F3] lg:m-3 md:m-3 m-1 "></div>
            <div className="flex flex-row lg:gap-2 md:gap-2 gap-1  lg:pb-5 md:pb-5 pb-1 justify-center items-center">
              <Link href={`mailto:sayantan.college6291@gmail.com`}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <HiMailOpen className=" lg:text-xl md:text-xl text-lg m-2 " />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/imsayantanpaul/'}>
                <button className=" rounded-full hover:bg-blue-900 duration-300 text-[#244d9d] hover:text-white">
                  <FaLinkedinIn className=" lg:text-xl md:text-xl text-lg m-2" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
export default TeamCredit;

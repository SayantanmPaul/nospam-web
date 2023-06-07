import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/nospamlogo.svg';
import background from '../public/background-new.jpg';
import { useSession, signOut, getSession } from 'next-auth/react';
import { Disclosure } from '@headlessui/react';
import { CgMenuRight } from 'react-icons/cg';
import Bot from '../public/userbot.jpg';
import { AiOutlineCoffee } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { BiHomeAlt, BiLogOut, BiGitBranch } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Flask from './flaskapp';
import Link from 'next/link';

const Workspace = () => {
  const { data: session, status } = useSession();
  const [nav, setnav] = useState(false);
  const handleNav = () => {
    setnav(!nav);
  };

  if (status === 'authenticated') {
    return (
      <>
        <Head>
          <title>Session active</title>
        </Head>
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 5 }}>
          <Disclosure as="nav" className="block lg:hidden">
            <Disclosure.Button className="absolute right-0 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white group">
              <div className=" lg:hidden  w-screen flex flex-row justify-between items-center px-[3%] ">
                <Image src={Logo} alt="nospam" width={130} className="pl-[3%] md:pl-[6%]" />
                <CgMenuRight
                  className="block lg:hidden h-6 w-6 md:mr-[3%] text-[#256D85] focus:text-[#122D42] "
                  aria-hidden="true"
                />
              </div>
            </Disclosure.Button>

            <div className="p-6 w-3/5 md:w-1/3 h-screen bg-teal-200 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500 ">
              <div className="flex flex-col justify-start gap-6 items-center">
                <Image src={Logo} alt="nospam" width={130} />
                <div className="my-4 border-b border-gray-100 pb-4">
                  <div className=" flex justify-start flex-col items-center w-full ">
                    {session.user.image ? (
                      <Image
                        className=" rounded-full border-2 p-1 border-green-300"
                        src={session.user.image}
                        alt="user"
                        width={82}
                        height={82}
                      />
                    ) : (
                      <Image
                        className=" rounded-full border-2 p-1 border-green-300"
                        src={Bot}
                        alt="user"
                        width={82}
                        height={82}
                      />
                    )}
                    <p
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      className="text-xs py-2 text-[#256D85] font-medium  "
                    >
                      Sign in as:
                    </p>
                    <p
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      className="text-sm py-1 text-[#256D85] font-semibold  "
                    >
                      {session.user.name}
                    </p>
                    <div className="w-30">
                      <p
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        className="text-xs py-1 text-[#256D85] font-semibold   "
                      >
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link rel="preload" href={'/index'}>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiHomeAlt className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Home</h3>
                    </div>
                  </Link>
                  <Link rel="preload" href={'/documentation'} as="About">
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <AiOutlineCoffee className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">About</h3>
                    </div>
                  </Link>
                  <Link href="https://github.com/SayantanmPaul/nospam-web">
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2  justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiGitBranch className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Source Code</h3>
                    </div>
                  </Link>
                  <div
                    style={{ fontFamily: 'Sarabun, sans-serif' }}
                    className="flex mb-2 justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                  >
                    <FiHelpCircle className="text-xl text-gray-900 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Help Desk</h3>
                  </div>
                  <div className=" fixed bottom-0  py-5">
                    <div
                      onClick={() => signOut()}
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2  justify-start items-center gap-4 lg:px-9 md:px-9 px-8 hover:bg-gray-800 p-2 border-2 border-green-300 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiLogOut className="text-xl text-gray-900 group-hover:text-green-500 " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-black pr-6">Log out</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure>
          <div className=" flex flex-row ">
            <Image
              src={background}
              alt="background"
              quality={100}
              objectFit="cover"
              className="lg:block hidden h-screen object-full overflow-hidden absolute opacity-80  z-0 "
            />
            <div className="lg:block hidden z-10">
              <div className="p-6 w-3/5 md:w-1/3 h-screen  top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500 ">
                <div className="flex flex-col justify-start gap-6 items-center">
                  <Image src={Logo} alt="nospam" width={130} />
                  <div className="my-4 border-b border-gray-100 pb-4">
                    <div className=" flex justify-start flex-col items-center w-full ">
                      {session.user.image ? (
                        <Image
                          className=" rounded-full border-2 p-1 border-[#8FAD8A]"
                          src={session.user.image}
                          alt="user"
                          width={82}
                          height={82}
                        />
                      ) : (
                        <Image
                          className=" rounded-full border-2 p-1 border-green-300"
                          src={Bot}
                          alt="user"
                          width={82}
                          height={82}
                        />
                      )}
                      <p
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        className="text-xs py-2 text-[#142630] font-medium  "
                      >
                        Sign in as:
                      </p>
                      <p
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        className="text-sm py-1 text-[#142630] tracking-normal font-semibold   "
                      >
                        {session.user.name}
                      </p>
                      <div className="w-30">
                        <p
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                          className="text-xs py-1 text-[#142630] font-semibold   "
                        >
                          {session.user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiHomeAlt className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Home</h3>
                    </div>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <AiOutlineCoffee size={23} className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">About</h3>
                    </div>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2  justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiGitBranch className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Source Code</h3>
                    </div>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 lg:px-9 md:px-9 px-6 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <FiHelpCircle className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 className="text-base text-gray-800 group-hover:text-white font-bold">Help Desk</h3>
                    </div>
                    <div className=" fixed bottom-0  py-5">
                      <div
                        onClick={() => signOut()}
                        style={{ fontFamily: 'Sarabun, sans-serif' }}
                        className="flex mb-2  justify-start items-center gap-4 lg:px-9 md:px-9 px-8 hover:bg-gray-800 p-2 border-2 border-gray-600 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                      >
                        <BiLogOut className="text-xl text-gray-900 group-hover:text-green-500 " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-black pr-6">Log out</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full lg:pt-0 pt-10'>  
            <Flask />
            </div>
          </div>
        </motion.div>
      </>
    );
  } else {
    return (
      <div className="bg-green-200 h-screen">
        <div className=" flex justify-center">
          <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-teal-600 text-lg items-center p-10">
            443 error please signin again!
          </h1>
        </div>
      </div>
    );
  }
};
export default Workspace;

// protected route


import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/nospamlogo.svg';
import bgimage  from '../public/background-blue.jpg'
import background from '../public/background-new.jpg';
import { useSession, signOut, getSession } from 'next-auth/react';
import { Disclosure } from '@headlessui/react';
import { CgMenuRight } from 'react-icons/cg';
import Bot from '../public/userbot.jpg';
import { AiOutlineCoffee, AiOutlineThunderbolt } from 'react-icons/ai';
import { FiHelpCircle } from 'react-icons/fi';
import { BiHomeAlt, BiLogOut, BiGitBranch } from 'react-icons/bi';
import { MdSentimentVerySatisfied} from 'react-icons/md'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Flask from './flaskapp';

const SpamDetect = () => {
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
            <Disclosure.Button className=" right-0  items-center peer justify-center rounded-md pl-4 pt-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white group">
              <div className=" lg:hidden w-screen flex flex-row justify-between items-center ">
                <Image src={Logo} alt="nospam" width={130} className="" />
                <CgMenuRight
                  className=" absolute right-4 lg:hidden h-6 w-6  text-[#256D85] focus:text-[#122D42] "
                  aria-hidden="true"
                />
              </div>
            </Disclosure.Button>

            <div className="p-6 w-3/5 md:w-1/3 h-full bg-gradient-to-r from-[#4CACBC] to-[#488FB1] z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500 " style={{backgroundImage: bgimage }}>
              <div className="flex flex-col justify-start items-center">
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
                      className="text-xs py-2 text-white font-medium  "
                    >
                      Sign in as:
                    </p>
                    <p
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                      className="text-sm py-1 text-black font-semibold  "
                    >
                      {session.user.name}
                    </p>
                    <div className="w-30">
                      <p
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        className="text-xs py-1 text-black font-semibold   "
                      >
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link href={'./workspace'}>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiHomeAlt className="text-lg text-gray-900 group-hover:text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-sm text-gray-800 group-hover:text-white font-bold tracking-normal">Main Menu</h3>
                    </div>
                  </Link>
                  <Link href={''}>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <AiOutlineCoffee className="text-lg text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-sm text-white font-bold tracking-normal">Spam Detection</h3>
                    </div>
                  </Link>
                  <Link href={'./sentimentdetect'}>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2  justify-start items-center gap-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <MdSentimentVerySatisfied className="text-lg text-gray-900 group-hover:text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-sm text-gray-800 group-hover:text-white font-bold tracking-normal">Sentiment Analysis</h3>
                    </div>
                  </Link>
                  <Link href={'./speechdetect'}>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <AiOutlineThunderbolt size={25} className="text-lg text-gray-900 group-hover:text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-sm text-gray-800 group-hover:text-white font-bold tracking-normal">Speech to Text Analysis</h3>
                    </div>
                  </Link>
                  <Link href={'https://github.com/SayantanmPaul/nospam-web'}>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiGitBranch className="text-lg text-gray-900 group-hover:text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-sm text-gray-800 group-hover:text-white font-bold tracking-normal">Source Code</h3>
                    </div>
                  </Link>
                  <div
                    style={{ fontFamily: 'Sarabun, sans-serif' }}
                    className="flex mb-2 justify-start items-center gap-4 hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                  >
                    <FiHelpCircle className="text-lg text-gray-900 group-hover:text-white " />
                    <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-sm text-gray-800 group-hover:text-white font-bold tracking-normal">Help Desk</h3>
                  </div>
                  <div className=" fixed bottom-0  py-5">
                    <div
                      onClick={() => signOut()}
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2  justify-start items-center gap-4 px-9 hover:bg-gray-800 p-2 border-2 border-white hover:border-black rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <BiLogOut className="text-lg text-gray-900 group-hover:text-green-500 " />
                      <h3 className="text-sm text-gray-800 group-hover:text-white font-black pr-6">Log out</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure>
          <div className=" flex flex-row w-screen ">
            <Image
              src={background}
              alt="background"
              quality={100}
              objectFit="cover"
              className="lg:block hidden h-screen object-full overflow-hidden absolute opacity-80  z-0 "
            />
            <div className="lg:block hidden z-10 ">
              <div className="py-6 h-screens top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-in-out delay-150 duration-500 ">
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
                  <div className="p-5">
                    <Link href={'/workspace'}>
                      <div
                        style={{ fontFamily: 'Sarabun, sans-serif' }}
                        className="flex mb-2  justify-start items-center gap-4  hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                      >
                        <BiHomeAlt className="text-xl text-gray-900 group-hover:text-white " />
                        <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-base text-gray-800 group-hover:text-white font-semibold tracking-normal ">Main Menu</h3>
                      </div>
                    </Link>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4  bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <AiOutlineCoffee size={23} className="text-xl text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-base text-white font-bold  tracking-normal">Spam Detection</h3>
                    </div>
                    <Link href={'./sentimentdetect'}>
                      <div
                        style={{ fontFamily: 'Sarabun, sans-serif' }}
                        className="flex mb-2  justify-start items-center gap-4  hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                      >
                        <MdSentimentVerySatisfied size={23} className="text-xl text-gray-900 group-hover:text-white " />
                        <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-base text-gray-800 group-hover:text-white font-bold tracking-normal">Sentiment Analysis</h3>
                      </div>
                    </Link>
                    <Link href={'./speechdetect'}>
                        <div
                        style={{ fontFamily: 'Sarabun, sans-serif' }}
                        className="flex mb-2 justify-start items-center gap-4  hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                        >
                        <AiOutlineThunderbolt size={25} className="text-xl text-gray-900 group-hover:text-white " />
                        <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-base text-gray-800 group-hover:text-white font-bold tracking-normal">Speech to Text Analysis</h3>
                        </div>
                    </Link>
                    <Link href={'https://github.com/SayantanmPaul/nospam-web'}>
                      <div
                        style={{ fontFamily: 'Sarabun, sans-serif' }}
                        className="flex mb-2 justify-start items-center gap-4  hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                      >
                        <BiGitBranch className="text-xl text-gray-900 group-hover:text-white " />
                        <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-base text-gray-800 group-hover:text-white font-bold tracking-normal">Source Code</h3>
                      </div>
                    </Link>
                    <div
                      style={{ fontFamily: 'Sarabun, sans-serif' }}
                      className="flex mb-2 justify-start items-center gap-4  hover:bg-gray-800 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                    >
                      <FiHelpCircle className="text-xl text-gray-900 group-hover:text-white " />
                      <h3 style={{fontFamily:'Poppins, sans-serif'}} className="text-base text-gray-800 group-hover:text-white font-bold tracking-normal">Help Desk</h3>
                    </div>
                    <div className=" fixed bottom-0  py-5">
                      <div
                        onClick={() => signOut()}
                        style={{fontFamily:'Poppins, sans-serif'}}
                        className="flex mb-2  justify-start items-center gap-4 lg:px-9 md:px-9 px-8 hover:bg-gray-800 p-2 border-2 border-gray-600 rounded-md group cursor-pointer hover:shadow-lg m-auto duration-200"
                      >
                        <BiLogOut className="text-xl text-gray-900 group-hover:text-green-500 " />
                        <h3 className="text-base text-gray-800 group-hover:text-white font-black pr-6  tracking-normal">Log out</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full '>  
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
export default SpamDetect;

// protected route


export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
      },
    };
  }
  return {
    props: { session },
  };
};

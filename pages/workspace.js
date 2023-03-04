import Head from 'next/head';
import Image from 'next/image';
import Logo from '../public/nospamlogo.svg';
import FontStyles from '../styles/navbar.module.css';
import { Dropdown, Avatar, Text } from '@nextui-org/react';

const Workspace = () => {
  return (
    <>
      <Head>
        <title>NoSpam: Detects The spam</title>
      </Head>
      <nav className="navbarhead bg-white">
        <div className="mx-[8%] lg:mx-16 mt-4 ">
          <div className=" flex flex-row justify-between  items-center mx-auto gap-6 ">
            <button className=" object-contain h-auto w-40 ">
              <Image src={Logo} alt="Logo" width={149} priority="true" />
            </button>

            {/* desktop view */}
            <div className=" gap-6 ml-auto flex flex-row items-center ">
              <a
                href="#"
                className={`${FontStyles.navtext}  text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
              >
                Home
              </a>
              <a
                href="#"
                className={`${FontStyles.navtext} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
              >
                About
              </a>
              <a
                href="#"
                className={`${FontStyles.navtext} text-[#00AA95] text-[20px] w-auto leading-5 font-normal hover:text-[#2D7D90] duration-300`}
              >
                Source Code
              </a>
              <a
                href="#"
                className={`${FontStyles.navtext} text-[#00AA95] text-[20px] w-auto leading-5 font-normal hover:text-[#2D7D90] duration-300`}
              >
                Contact Us
              </a>
            </div>

            <Dropdown placement="bottom-left">
              <Dropdown.Trigger>
                <Avatar
                  rel="preload"
                  bordered
                  size="md"
                  as="button"
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
              <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                <Dropdown.Item textValue="user" key="profile" css={{ height: '$18' }}>
                  <Text b color="#003049">
                    Signed in as
                  </Text>
                  <Text b color="#003049">
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item
                  textValue="Details about the project  "
                  className="block lg:hidden"
                  key="settings"
                  withDivider
                >
                  About
                </Dropdown.Item>
                <Dropdown.Item textValue="Source code" className="block lg:hidden" key="analytics" withDivider>
                  <a href="https://github.com/SayantanmPaul/nospam-web"> Source Code </a>
                </Dropdown.Item>

                <Dropdown.Item textValue="bug report" className="block lg:hidden" key="system">
                  Contact Us
                </Dropdown.Item>
                <Dropdown.Item textValue="logout" key="logout" color="error" withDxivider>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
      {/* writing section */}
      <div className=" relative flex items-center justify-center lg:pt-5 pt-4 ">
        <div className=" greenbox md:mx-16 mx-5 w-[100%] h-screen rounded-lg bg-[#80FFDB]">
          <div className=" relative ml-[5%] flex items-center lg:pt-14 pt-10 headtext ">
            <h3>
              <a
                style={{ fontFamily: 'Sarabun, sans-serif' }}
                className=" font-Sarabun lg:text-3xl md:text-2xl text-[#256D85] font-black leading-[47px] uppercase "
                href="#"
              >
                Write/Paste down your comment here{' '}
              </a>
            </h3>
          </div>

          {/* written box  */}

          <form action="{{ url_for('predict')}}" method="POST">
            <div className="md:pt-5 ">
              <div className="form-group flex items-center justify-center lg:mt-3">
                <textarea
                  className="form-control m-0 block w-[90%] h-[70%] rounded-xl border-2 border-solid border-[#00cc76] bg-white bg-clip-padding px-3 py-1.5 text-lg pt-3 pl-4 transition ease-in-out focus:border-[#00CC76] focus:bg-white placeholder:opacity-50  focus:text-[#256D85] focus:outline-none"
                  id="comment"
                  name="comment"
                  rows="10"
                  placeholder="Begin writing your text here"
                ></textarea>
              </div>
            </div>

            {/* Predict Button  */}

            <div className="ml-[5%] flex items-center lg:pt-6 pt-5  predictbutton">
              <button type="submit">
                <p className="group relative overflow-hidden  rounded-lg bg-green-500 px-[30px] py-[5px] text-sm font-medium text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 hover:ring-2 hover:ring-green-400 hover:ring-offset-2 md:px-[50px] md:py-[7px] lg:px-[70px] lg:py-[8px]">
                  <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                  <span className="relative">Predict</span>
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer  */}
      <div className="footerbar relative mt-5">
        <div className="bg-[#122D42] ">
          <div className="flex flex-row items-center justify-between lg:mx-16 md:mx-16  mx-5">
            <div>
              <Image className=" w-[109px] my-2" src={Logo} width={120} alt="logo" />
            </div>

            <div className="footer-col lg:flex md:flex hidden flex-row items-center justify-between lg:pl-24 md:pl-24   ">
              <h4 className=" text-[10px] leading-4 font-medium text-[#00AA95] font-Inter hover:text-green-200 transition duration-300">
                ©2022 NoSpam. | All rights reserved{' '}
              </h4>
            </div>
            <div className="flex flex-row justify-between lg:space-x-8 md:space-x-4 space-x-3">
              <div className="footer-col relative flex justify-center items-center">
                <ul>
                  <li>
                    {' '}
                    <a
                      className="text-[10px] leading-8 font-medium text-[#256D85] hover:text-green-700 transition duration-300"
                      href="#"
                    >
                      About{' '}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col relative lg:flex md:flex hidden justify-center items-center">
                <ul>
                  <li>
                    {' '}
                    <a
                      className="text-[10px] leading-8 font-medium text-[#256D85] hover:text-green-700 transition duration-300"
                      href="https://github.com/SayantanStackflow/TeamInfinity-NoSpam."
                    >
                      Source Code
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-col relative flex justify-center items-center">
                <ul>
                  <li>
                    {' '}
                    <a
                      className="text-[10px] leading-8 font-medium text-[#256D85] hover:text-green-700 transition duration-300"
                      href="#"
                    >
                      Help Desk
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workspace;

import Image from 'next/image';
import Logo from '../public/nospamlogo.svg';
import FontStyles from '../styles/navbar.module.css';
import { Dropdown, Avatar, Text } from '@nextui-org/react';
import { useSession, signOut, getSession } from 'next-auth/react';

const Workspace = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <div>
        <div className="static">
          <nav className="navbarhead bg-white">
            <div className="mx-[8%] lg:mx-16 mt-4 ">
              <div className=" flex flex-row justify-between  items-center mx-auto gap-6 ">
                <button className=" object-contain h-auto w-25 ">
                  <Image src={Logo} alt="Logo" width={140} priority="true" />
                </button>

                {/* desktop view */}
                <div className=" gap-6 ml-auto flex flex-row items-center ">
                  <a
                    href="#"
                    className={`${FontStyles.underline_animation} ${FontStyles.navtext} hidden lg:block hover-underline-animation lg:text-xl text-base leading-6 text-[#00AA95] hover:text-[#2D7D90] transition duration-300 relative`}
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className={`${FontStyles.underline_animation} ${FontStyles.navtext} text-[#00AA95] text-[20px] leading-5 font-normal hover:text-[#2D7D90] duration-300`}
                  >
                    About
                  </a>
                  <a
                    href="https://github.com/SayantanmPaul/nospam-web"
                    className={`${FontStyles.underline_animation} ${FontStyles.navtext} hidden lg:block md:block hover-underline-animation lg:text-xl text-base leading-6 text-[#00AA95] hover:text-[#2D7D90] transition duration-300 relative`}
                  >
                    Source Code
                  </a>
                  <a
                    href="#"
                    className={`${FontStyles.underline_animation} ${FontStyles.navtext} hidden lg:block hover-underline-animation lg:text-xl text-base leading-6 text-[#00AA95] font-Bebas hover:text-[#2D7D90] transition duration-300 relative`}
                  >
                    Contact Us
                  </a>
                </div>

                <Dropdown placement="bottom-left">
                  <Dropdown.Trigger>
                    <Avatar rel="preload" bordered size="md" as="button" color="secondary" src={session.user.image} />
                  </Dropdown.Trigger>
                  <Dropdown.Menu color="secondary" aria-label="Avatar Actions">
                    <Dropdown.Item textValue="user" key="profile" css={{ height: '$18' }}>
                      <Text b color="#003049">
                        {session.user.name}
                      </Text>
                      <br></br>
                      <Text b color="#003049">
                        {session.user.email}
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
                      <div onClick={() => signOut()}>Log Out</div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </nav>
        </div>
        <iframe
          src="https://nospam.onrender.com/webview/"
          title="webview"
          className="w-full h-screen"
          sandbox="allow-scripts allow-same-origin allow-forms"
          seamless
        ></iframe>

        <div className="footerbar relative ">
          <div className="bg-[#122D42] ">
            <div className="flex flex-row items-center justify-between lg:mx-16 md:mx-16  mx-5">
              <div className="">
                <Image className=" w-[109px] my-2" src={Logo} alt="logo" width={50} priority="true" />
              </div>

              <div className="footer-col lg:flex md:flex hidden flex-row items-center justify-between lg:pl-24 md:pl-24   ">
                <h4 className=" text-[10px] leading-4 font-medium text-[#00AA95] font-Inter hover:text-green-200 transition duration-300">
                  ©2022 NoSpam. | All rights reserved
                </h4>
              </div>
              <ul className=" flex flex-row pt-2 gap-3">
                <li>
                  <a
                    className="text-[10px] leading-8 font-medium text-[#256D85] hover:text-green-700 transition duration-300"
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="text-[10px] leading-8 font-medium text-[#256D85] hover:text-green-700 transition duration-300"
                    href="https://github.com/SayantanmPaul/nospam-web"
                  >
                    Source Code
                  </a>
                </li>
                <li>
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
    );
  } else {
    return <div>Signin again</div>;
  }
};
export default Workspace;

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

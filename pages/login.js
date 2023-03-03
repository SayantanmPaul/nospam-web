import Layout from '@/Utilities/layoutAuth';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/nospamlogo.svg';
import Google from '../public/google.png';
import Gihub from '../public/github.png';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import styles from '../styles/form.module.css';
import { useState } from 'react';
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Login: NoSpam.</title>
      </Head>
      <section className=" mx-auto flex  flex-col gap-7  ">
        {/* tiitle */}
        <div className="title justify-center flex ">
          <Image src={Logo} alt="NoSpam" width={140} priority="true" />
        </div>

        {/* form */}
        <form className="flex flex-col gap-5 ">
          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center pr-6">
              <HiAtSymbol width={25} />
            </span>
          </div>

          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type={`${show ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
            />
            <span className="icon flex items-center px-6" onClick={() => setShow(!show)}>
              <HiFingerPrint width={25} className="cursor-pointer hover:text-[#146690] duration-300" />
            </span>
          </div>
          {/* login butons */}
          <div className="input-button">
            <button
              className="lg:w-3/5 md:w-4/5 w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 p-1 pb-2 text-green-50 text-lg rounded-full hover:bg-gradient-to-r
               hover:from-blue-800 hover:to-purple-800 duration-300 "
              type="submit"
            >
              <a style={{ fontFamily: 'Poppins, sans-serif' }} className="text-sm">
                LogIn
              </a>
            </button>
          </div>
          <div className="grid grid-cols-3 items-center justify-center">
            <div className="w-auto h-[1px] bg-gray-300"></div>
            <a className="text-xs">or</a>
            <div className="w-auto h-[1px] bg-gray-300"></div>
          </div>
          <div className="input-button py-1 items-center flex flex-row border rounded-full justify-center gap-2 hover:bg-slate-200  ">
            <Image src={Google} alt="google" width={25} />
            <button style={{ fontFamily: 'Poppins, sans-serif' }} type="submit" className="text-sm">
              Sigin with Google
            </button>
          </div>
          <div className="input-button py-1 items-center flex flex-row border rounded-full justify-center gap-2 hover:bg-slate-200  ">
            <Image src={Gihub} alt="google" width={20} />
            <button style={{ fontFamily: 'Poppins, sans-serif' }} type="button" className=" text-sm">
              Sigin with Gihub
            </button>
          </div>
        </form>
        {/* bottom */}
        <div className="flex flex-row justify-center gap-1 ">
          <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-cener text-gray-400 text-xs ">
            don&#39;t have a account yet?
          </p>
          <Link href={'/register'} as="Register">
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className=" text-blue-700 underline text-xs">
              Sign Up
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Login;

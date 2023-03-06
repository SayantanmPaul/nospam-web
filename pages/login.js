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
import { useSession, signIn, signOut } from 'next-auth/react';
import { useFormik } from 'formik';
import login_validate from '@/formik_hooks/validation';

const Login = () => {
  const [show, setShow] = useState(false);
  // formik hooks uses
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  // google handler function
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: 'http://localhost:3000/workspace/' });
  }

  // github login function
  async function handleGithubSignIn() {
    signIn('github', { callbackUrl: 'http://localhost:3000/workspace/' });
  }

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
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 ">
          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type="email"
              name="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
            />
            <span className="icon flex items-center pr-6">
              <HiAtSymbol width={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xs text-start px-6 text-red-500">
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}

          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type={`${show ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
              {...formik.getFieldProps('password')}
            />
            <span className="icon flex items-center px-6" onClick={() => setShow(!show)}>
              <HiFingerPrint width={25} className="cursor-pointer hover:text-[#146690] duration-300" />
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xs text-start px-6 text-red-500">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}
          {/* login butons */}
          <div className="input-button">
            <button
              className="lg:w-3/5 md:w-4/5 w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 p-2 text-green-50 text-lg rounded-full hover:bg-gradient-to-r
               hover:from-blue-800 hover:to-purple-800 duration-300 "
              type="submit"
            >
              <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-sm">
                LogIn
              </p>
            </button>
          </div>
          <div className="grid grid-cols-3 items-center justify-center">
            <div className="w-auto h-[1px] bg-gray-300"></div>
            <a className="text-xs">or</a>
            <div className="w-auto h-[1px] bg-gray-300"></div>
          </div>
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="input-button py-1 items-center flex flex-row border rounded-full justify-center gap-2 hover:bg-slate-200  "
          >
            <Image src={Google} alt="google" width={25} />
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-sm">
              Sigin with Google
            </p>
          </button>
          <button
            onClick={handleGithubSignIn}
            type="button"
            className="input-button py-1 items-center flex flex-row border rounded-full justify-center gap-2 hover:bg-slate-200  "
          >
            <Image src={Gihub} alt="google" width={20} />
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className=" text-sm">
              Sigin with Gihub
            </p>
          </button>
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

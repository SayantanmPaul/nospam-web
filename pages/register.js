import Head from 'next/head';
import Layout from '@/Utilities/layoutAuth';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/nospamlogo.svg';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from 'react-icons/hi';
import styles from '../styles/form.module.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import { signup_validate } from '@/formik_hooks/validation';

const Register = () => {
  const [show, setShow] = useState({ password: false, cpassword: false });

  // formik hooks to get the from inputs
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validate: signup_validate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title>Register: NoSpam.</title>
      </Head>
      <section className=" mx-auto flex  flex-col gap-7  ">
        {/* tiitle */}
        <div className="title justify-center flex ">
          <Image src={Logo} alt="NoSpam" width={140} priority="true" />
        </div>

        {/* form */}

        <form className="flex flex-col gap-2 " onSubmit={formik.handleSubmit}>
          {/* userName input section */}

          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type="text"
              name="Username"
              placeholder="Username"
              {...formik.getFieldProps('userName')}
            />
            <span className="icon flex items-center pr-6">
              <HiOutlineUser width={25} />
            </span>
          </div>

          {/* email input section */}
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

          {/* print email errors from validation.js */}
          {formik.errors.email && formik.touched.email ? (
            <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xs text-start px-6 text-red-500">
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}

          {/* password input section */}
          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type={`${show.password ? 'text' : 'password'}`}
              name="password"
              placeholder="password"
              {...formik.getFieldProps('password')}
            />
            <span
              className="icon flex items-center px-6"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <HiFingerPrint width={25} className="cursor-pointer hover:text-[#146690] duration-300" />
            </span>
          </div>

          {/* print password errors from validation.js */}
          {formik.errors.password && formik.touched.password ? (
            <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xs text-start px-6 text-red-500">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          {/* confirmpassword input section */}
          <div className={`${styles.input_group} flex border rounded-xl relative`}>
            <input
              style={{ fontFamily: 'Poppins, sans-serif' }}
              className={`${styles.input_text} w-full py-3 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none text-sm `}
              type={`${show.cpassword ? 'text' : 'password'}`}
              name="confirmpassword"
              placeholder="Confirm Password"
              {...formik.getFieldProps('confirmpassword')}
            />
            <span
              className="icon flex items-center px-6"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <HiFingerPrint width={25} className="cursor-pointer hover:text-[#146690] duration-300" />
            </span>
          </div>

          {/* print confirmpassword errors from validation.js */}
          {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
            <span style={{ fontFamily: 'Poppins, sans-serif' }} className="text-xs text-start px-6 text-red-500">
              {formik.errors.confirmpassword}
            </span>
          ) : (
            <></>
          )}

          {/* login butons */}
          <div className="input-button">
            <button
              className="lg:w-3/5 md:w-4/5 w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 p-1 pb-2 text-green-50 text-lg rounded-full hover:bg-gradient-to-r
               hover:from-blue-800 hover:to-purple-800 duration-300 "
              type="submit"
            >
              <a style={{ fontFamily: 'Poppins, sans-serif' }} className="text-sm">
                SignUp
              </a>
            </button>
          </div>
        </form>

        {/* bottom to redirect to signin page */}
        <div className="flex flex-row justify-center pb-5 gap-1">
          <p style={{ fontFamily: 'Poppins, sans-serif' }} className="text-cener text-gray-400 text-xs ">
            already have a account?
          </p>
          <Link href={'/login'} as="LogIn">
            <p style={{ fontFamily: 'Poppins, sans-serif' }} className=" text-blue-700 underline text-xs">
              Log In
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Register;

import bgimage from '../public/bgtestomonial.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../Utilities/motions';
import Link from 'next/link';
const getstarted = () => {
  return (
    <div className=" lg:w-5/6 md:w-[80%] w-full ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className=" flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#80FFDB] to-[#59C1BD] rounded-2xl relative"
      >
        <div className="pt-9 z-10">
          <motion.p
            variants={textVariant(0.2)}
            style={{ fontFamily: 'Gothic A1, sans-serif', fontWeight: 'bold' }}
            className="text-[#0D4C92] lg:text-sm text-xs leading-6 uppercase"
          >
            You made it to the bottom
          </motion.p>
        </div>
        <div className="lg:pt-8 pt-4 z-10">
          <motion.h2
            variants={textVariant(0.6)}
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            className="text-transparent bg-clip-text bg-gradient-to-br from-[#2D7D90] to-[#3e1783] lg:text-[59px] md:text-[45px] text-[28px] lg:leading-[60px] md:leading-[40px] leading-8 tracking-tight text-center capitalize p-2"
          >
            Seems you are <br className=""></br> more interested in it.
          </motion.h2>
        </div>
        <motion.div variants={textVariant(0.8)} className="lg:py-9 py-6 mb-3 z-10">
          <Link rel="preload" href={'/login'} as="login">
            <button
              style={{ fontFamily: 'Sarabun, sans-serif' }}
              className="bg-[#122D42] hover:bg-[#04273a] rounded-full duration-500"
            >
              <p className="text-white uppercase font-semibold tracking-wide text-sm lg:text-base hover:text-[#3deba2] py-1 px-5 duration-500">
                Let&apos;s get started
              </p>
            </button>
          </Link>
        </motion.div>
        <Image
          src={bgimage}
          alt="imagebackground"
          width={1200}
          className=" h-full overflow-hidden object-cover absolute opacity-30"
        />
      </motion.div>
    </div>
  );
};
export default getstarted;

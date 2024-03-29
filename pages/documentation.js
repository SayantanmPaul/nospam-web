import AboutNav from '@/components/navforabout';
import Overview from '@/components/overview';
import TeamCredit from '@/components/teamcredit';
import NewFooter from '@/components/newfooter';
import Image from 'next/image';
import Head from 'next/head';
import { TypingText } from '@/Utilities/customtext';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/Utilities/motions';
import BgAbout from '../public/aboutbg.jpg';
const Documentation = () => {
  return (
    <>
      <Head>
        <title>NoSpam:documentation</title>
      </Head>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 3 }}
        className=" lg:px-28 px-6 pt-5 "
      >
        <AboutNav />
        <div className=" flex flex-col items-center justify-center lg:pt-5 pt-4 ">
          {/* in green box */}
          <div className=" relative greenbox  h-auto  rounded-lg bg-gradient-to-br from-[#80FFDB]  to-[#2D7D90] max-w-[1280px] overflow-hidden ">
            <div className=" lg:p-10 md:p-8 p-4 flex flex-col lg:gap-7 gap-4 ">
              <Image
                src={BgAbout}
                alt="background"
                layout="fill"
                objectFit="cover"
                className=" absolute opacity-25 z-0"
              />
              <div className="z-10">
                <Overview />
                <TeamCredit />

                <div>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.01 }}
                    className="lg:p-10 lg:py-5 md:py-5 py-3"
                  >
                    <TypingText
                      title={'Thanks to this awesome team behind the seen to make possible this project'}
                      textStyles="text-center"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* footer section */}

          <div className=" bg-[#122D42] mt-5 p-2 w-screen">
            <NewFooter />
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default Documentation;

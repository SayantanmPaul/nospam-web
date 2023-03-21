import AboutNav from '@/components/navforabout';
import Overview from '@/components/overview';
import TeamCredit from '@/components/teamcredit';
import NewFooter from '@/components/newfooter';
import Image from 'next/image';
import Styles from '../styles/defaultstyles';
const Documentation = () => {
  return (
    <div className={`${Styles.pxpadding} lg:px-28 px-6 pt-5`}>
      <AboutNav />
      <div className=" flex flex-col items-center justify-center lg:pt-5 pt-4 ">
        <div className=" greenbox w-[100%] h-auto  rounded-lg bg-[#80FFDB] max-w-[1240px] overflow-hidden ">
          <div className=" lg:p-10 md:p-8 p-4 z-0 flex flex-col lg:gap-7 gap-4  ">
            <Overview />
            <TeamCredit />
          </div>
        </div>
        <div className={`${Styles.pxpadding} lg:px-28 px-6 `}>
          <div className=" bg-[#122D42] mt-5 p-2 w-screen">
            <NewFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Documentation;

import AboutNav from '@/components/navforabout';
import Overview from '@/components/overview';
import Styles from '../styles/defaultstyles';
Overview;
const Documentation = () => {
  return (
    <div className={`${Styles.pxpadding} lg:px-28 px-6 pt-5`}>
      <AboutNav />
      <div className=" flex items-center justify-center lg:pt-5 pt-4 ">
        <div className=" greenbox w-[100%] h-auto  rounded-lg bg-[#80FFDB] max-w-[1240px]">
          <div className=" lg:p-10 md:p-8 p-5 -z-0">
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Documentation;

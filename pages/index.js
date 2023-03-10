import Footer from '@/components/footer';
import Getstarted from '@/components/getstarted';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Specialiy from '@/components/speciality';
import Tutorial from '@/components/tutorial';
import Styles from '../styles/defaultstyles';

import Head from 'next/head';

const Index = () => {
  return (
    <>
      <Head>
        <title>NoSpam.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className={`${Styles.pxpadding} lg:px-28 px-6 pt-5`}>
          <Navbar />
        </div>
        <div
          className={`${Styles.pxpadding} lg:px-28 px-6 bg-repeat `}
          style={{ backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png)' }}
        >
          <div className=" my-11 lg:my-0">
            <Hero />
          </div>
        </div>
        <div className={`${Styles.pxpadding} lg:px-28 px-6 bg-[#80FFDB] `}>
          <Tutorial />
        </div>
        <div
          className={`${Styles.pxpadding} lg:px-28 px-6 bg-repeat `}
          style={{ backgroundImage: 'url(https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png)' }}
        >
          <div className="my-20">
            <Specialiy />
          </div>
        </div>

        <Getstarted />
        <Footer />
      </div>
    </>
  );
};
export default Index;

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';
import '../styles/layout.module.css';
import Img1 from '../public/ghibliimg1.jpg';
import Img2 from '../public/ghibliimg2.jpg';
import Img3 from '../public/ghibliimg3.jpg';
import Img4 from '../public/ghibliimg4.jpg';
import Img5 from '../public/ghibliimg5.jpg';
import Image from 'next/image';
export default function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: 'url(/background-blue.jpg)' }}
      className="flex h-screen bg-cover bg-center overflow-hidden  "
    >
      <div className="m-auto bg-slate-50 rounded-lg lg:w-3/5 md:w-3/5 w-[85%] h-5/7 grid lg:grid-cols-2 overflow-hidden ">
        <div className=" hidden lg:block lg:p-6 ">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <Image
                  src={Img5}
                  alt="img1"
                  width={3000}
                  className=" rounded-md object-contain h-auto"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img2}
                  alt="img1"
                  width={2000}
                  className="rounded-md object-cover  h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img3}
                  alt="img1"
                  width={2000}
                  className="rounded-md object-center h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img4}
                  alt="img1"
                  width={2000}
                  className="rounded-md object-cover h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img1}
                  alt="img1"
                  width={2000}
                  className="rounded-md object-cover h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="right flex flex-col justify-evenly ">
          <div className="lg:p-7 p-5 text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';
import '../styles/layout.module.css';
import Img1 from '../public/ghibliimg1.jpg';
import Img3 from '../public/ghibliimg3.jpg';
import Image from 'next/image';
export default function Layout({ children }) {
  return (
    <div
      style={{ backgroundImage: 'url(/background-blue.jpg)' }}
      className="flex h-screen bg-cover bg-center overflow-hidden  "
    >
      <div className="m-auto bg-slate-50 rounded-lg lg:w-3/5 md:w-3/5 w-[85%] h-5/7 grid lg:grid-cols-2 overflow-hidden ">
        <div className=" hidden lg:block">
          <Swiper
            spaceBetween={1}
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
              <div>
                <Image
                  src={Img1}
                  alt="img1"
                  width={1000}
                  className="rounded-lg object-cover h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img3}
                  alt="img1"
                  width={1000}
                  className="rounded-lg object-cover  h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img1}
                  alt="img1"
                  width={1000}
                  className="rounded-lg object-cover h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img1}
                  alt="img1"
                  width={1000}
                  className="rounded-lg object-cover h-full w-full"
                  priority="true"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image
                  src={Img1}
                  alt="img1"
                  width={1000}
                  className="rounded-lg object-cover h-full w-full"
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

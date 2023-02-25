import React, { useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';

const hero = () => {
  // avatar images
  const slides = [
    {
      url: 'https://www.linkpicture.com/q/girlimage.png',
    },
    {
      url: 'https://www.linkpicture.com/q/boyimage.png',
    },
  ];
  const [currentIndedx, setCurrentIndex] = useState(0);

  // avatar arrow function
  const prevSlide = () => {
    const isFirstSlide = currentIndedx === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndedx - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndedx === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndedx + 1;
    setCurrentIndex(newIndex);
  };

  // slidedot function
  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  const newtSlide = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    setTimer(intervalId);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="max-w-[300px] h-[180px] w-full m-auto relative group "></div>;
};
export default hero;

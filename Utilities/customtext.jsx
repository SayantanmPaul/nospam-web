'use client';
import { motion } from 'framer-motion';
import Styles from '../styles/defaultstyles';
import { textContainer, textVariant2 } from '../Utilities/motions';
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    style={{ fontFamily: 'Poppins, sans-serif' }}
    className="lg:text-2xl md:text-[17px] text-[8px] font-medium tracking-tight text-white  text-center "
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

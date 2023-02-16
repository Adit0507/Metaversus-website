'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title, textStyles }) => (
  <motion.p className={`font-normal text-[14px] text-secondary-white ${textStyles}`} variants={textContainer}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

// export const TitleText = ({ title, textStyles }) => (
//   <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className={`mt-[8px] md:text-[64px] ${textStyles}`}>{title}</motion.h2>
// );

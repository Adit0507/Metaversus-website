'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { newFeatures } from '../constants';
import { NewFeatures, TitleText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      viewport={{ once: false, amount: 0.25 }}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.3, 1)}
        className="flex-[1] flex justify-center flex-col"
      >
        <TitleText title={<>What's New about Metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className={`flex-1 ${styles.flexCenter}`}
        variants={planetVariants('right')}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;

import BubbleAnimation from '@/components/Animations/BubbleAnimation/Bubble';
import styles from '@/styles/Animation.module.css';
import { Facebook, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
const Homes = () => {
  const media1 = useMediaQuery('(min-width:1200px)');
  return (
    <div className={`flex flex-row items-start !justify-center gap-10 px-7 s1040:flex-col s1040:gap-5`}>
      <motion.div
        initial={media1 && { x: -25, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="xl:ml-8 s1040:mx-auto"
      >
        <BubbleAnimation />
      </motion.div>
      <motion.div
        initial={media1 && { x: -25, opacity: 0 }}
        animate={media1 && { x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-[8px]"
      >
        <div
          className={` ${styles.content} flex flex-row justify-center sm:!text-[10px] lg:justify-start xl:justify-start sg:text-[15px] s400:!text-center s400:!text-[9px]`}
        >
          <h1>abdul haseeb</h1>
          <h1>abdul haseeb</h1>
        </div>
        <p
          className={`text-[22px] text-[#3C3939] sm:!text-[18px] lg:!text-start xl:max-w-[650px] sg:max-w-[600px] sg:text-center sg:text-[20px]  
          `}
        >
          Passionate front-end developer creating beautiful websites with continuous improvement.
        </p>

        <div className="mt-5 flex gap-8 lg:!justify-start sg:flex-row sg:justify-center">
          <a
            href="#"
            rel="noreferrer"
            aria-label="facebook"
            target={'_blank'}
          >
            <Facebook
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </a>
          <a
            href="#"
            rel="noreferrer"
            aria-label="twitter"
            target={'_blank'}
          >
            <Twitter
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </a>
          <a
            href="https://github.com/haseeb196"
            rel="noreferrer"
            aria-label="github"
            target={'_blank'}
          >
            <GitHub
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </a>
          <a
            href="https://linkedin.com/in/abdulhaseeb-dev"
            rel="noreferrer"
            aria-label="linkedin"
            target={'_blank'}
          >
            <LinkedIn
              htmlColor={`#666054`}
              className="!sm:text-[24px] !text-[30px]"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Homes;

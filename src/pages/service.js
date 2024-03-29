import Services from '@/components/PagesComponents/Services/MainComponent/Services';
import { motion, useScroll, useSpring } from 'framer-motion';
import Head from 'next/head';
const Service = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Service Section"
        />
        <title>Service</title>
      </Head>
      <div className="bg-[#cecdcd]">
        <motion.div
          className="z-[100] h-[2.5px]  origin-[0%] bg-[#ffffff]  xl:!fixed  xl:!top-0 xl:!right-0 xl:!left-0  sg:sticky sg:top-[64px] sg:h-[5px]"
          style={{ scaleX }}
        ></motion.div>

        <Services />
      </div>
    </>
  );
};

export default Service;

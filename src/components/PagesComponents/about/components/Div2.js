import Progressbar from '@/components/Animations/progressBar/Progressbar';
import { motion } from 'framer-motion';
const Div2 = () => {
  return (
    <div className="flex flex-row gap-60 bg-[#9e9b9b] py-14 font-mono capitalize text-[#2c2a2a] xl:px-32 sg:!px-16 s1040:flex-col s1040:gap-10 s400:!px-6 s760:!px-8">
      <motion.div
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div>
          <h1 className="text-[25px] font-bold">programming skills</h1>{' '}
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Progressbar
              title={'react'}
              percent={80}
            />
          </div>
          <div>
            <Progressbar
              title={'javascript'}
              percent={85}
            />
          </div>
          <div>
            <Progressbar
              title={'tailwind'}
              percent={90}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -25, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        <div>
          <h1 className="text-[25px] font-bold">language skills</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <Progressbar
              title={'english'}
              percent={70}
            />
          </div>
          <div>
            <Progressbar
              title={'urdu'}
              percent={81}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Div2;

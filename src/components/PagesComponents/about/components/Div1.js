import { motion } from 'framer-motion';

function Div1() {
  return (
    <motion.div
      initial={{ x: -25, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-12 xl:px-32 sg:!px-16 s400:!px-6 s760:!px-8"
    >
      <div className="mb-2 flex flex-col gap-[0.6rem] capitalize">
        <h2 className="text-[30px] font-extrabold text-[#2c2a2a]">about me</h2>
      </div>
      <hr className="border-gray-400" />
      <div className="flex  max-w-[1000px] flex-col gap-5 py-8 font-sans text-[17px] text-[#2c2a2a]">
        <p className="flex flex-col gap-1">
          As a frontend developer, my passion lies in crafting beautiful, intuitive user interfaces that bring digital
          experiences to life. I thrive on creating seamless interactions that leave a lasting impression on users.{' '}
        </p>
        <p>
          My expertise in HTML, CSS, and Javascript, combined with my proficiency in frameworks such as React JS, Next
          JS and Tailwind CSS, allows me to build visually stunning and highly responsive web applications. Whether
          it&apos;s creating a website from scratch or revamping an existing one, I approach each project with a
          creative mindset and an unwavering commitment to quality.
        </p>
      </div>
      <hr className="border-gray-400" />
      <div className="flex flex-row gap-x-[26%] py-8 s760:flex-col s760:gap-y-[20px] ">
        <div className="flex flex-row gap-[2rem] s400:gap-[10%]">
          <div className="flex flex-col gap-1 font-semibold capitalize text-[#2c2a2a]">
            <p>birthday:</p>

            <p>age:</p>

            <p>email:</p>
          </div>
          <div className="flex max-w-[140px] flex-col flex-nowrap gap-1 text-[#424040]">
          <p>10-9-1999</p>
            <p>{new Date().getFullYear() - '1999'}</p>

            <p className="s400:break-words">dontreveal@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-[2rem] s400:gap-[4%]">
          <div className="flex flex-col gap-1 font-semibold capitalize text-[#2c2a2a]">
            <p>nationality:</p>
            <p>Freelance:</p>
          </div>
          <div className="flex flex-col flex-nowrap gap-1 capitalize text-[#424040]">
            <p>Pakistani</p>
            <p>Available</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-400" />
      <div className="py-9">
        <a
          href="#"
          className="rounded-full bg-white !py-4 !px-10 font-medium"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
}

export default Div1;

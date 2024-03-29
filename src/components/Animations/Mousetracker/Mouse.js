import { useEffect, useState } from 'react';
const Mouse = () => {
  const [mousetrack, setMousetrack] = useState({});
  const mousetrackstyle = {
    transform: `translate(${mousetrack.x}px, ${mousetrack.y}px)`,
    width: '6px',
    height: '6px',
    marginLeft: '-3px',
    marginTop: '-3px',
    transition: `width .3s ease-in-out, height .3s ease-in-out, margin .3s ease-in-out, opacity .3s ease-in-out`,
  };
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousetrack({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });
  return (
    <>
      {' '}
      <div
        className={`z-100 duration-400 pointer-events-none fixed left-0 top-0 -ml-[15px]  -mt-[15px] h-[30px] w-[30px] rounded-3xl border-[2px] border-solid border-white  opacity-90 transition-all ease-out`}
        style={{
          transform: `translate(${mousetrack.x}px, ${mousetrack.y}px)`,
        }}
      ></div>
      <div
        className={`z-100 pointer-events-none fixed left-0 top-0   rounded-3xl border-[2px] border-solid   border-white opacity-90`}
        style={mousetrackstyle}
      ></div>
    </>
  );
};

export default Mouse;

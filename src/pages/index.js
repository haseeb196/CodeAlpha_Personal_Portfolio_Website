/* eslint-disable @next/next/no-page-custom-font */
import Homes from '@/components/PagesComponents/home/Homes';
import { ModeNight, WbSunny } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [colors, setColors] = useState(true);
  const minheight = useMediaQuery('(min-height:925px)');

  const media = useMediaQuery('(min-width:1200px)');
  const media2 = useMediaQuery('(max-width:1200px)');

  const colorchanger = () => {
    if (colors === true) {
      setColors(false);
    } else if (!colors) {
      setColors(true);
    }
  };
  return (
    <>
      <Head>
        <title>Personal-Portfolio</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main
        className={`flex  items-center justify-center overflow-hidden xl:!min-h-[100vh]  sg:min-h-[93vh]   ${
          minheight && '!min-h-[96vh]'
        }  ${!media2 ? (colors ? 'bg-[#cecdcd]' : 'bg-[#1d2025]') : 'bg-[#BBBBBB]'}`}
      >
        {media ? (
          colors ? (
            <button
              onClick={colorchanger}
              className="absolute bottom-7 right-8 rounded-3xl bg-[#03001C] p-3 shadow-2xl transition-all duration-100"
            >
              <ModeNight htmlColor="white" />
            </button>
          ) : (
            <button
              onClick={colorchanger}
              className="absolute bottom-7 right-8 rounded-3xl bg-[#FEFCF3] p-3 shadow-2xl transition-all duration-100"
            >
              <WbSunny htmlColor="gray" />
            </button>
          )
        ) : (
          <></>
        )}{' '}
        <Homes color={colors} />
      </main>
    </>
  );
}

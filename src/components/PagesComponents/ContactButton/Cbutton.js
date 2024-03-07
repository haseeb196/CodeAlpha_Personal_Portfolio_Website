import { GetApp, Message } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Cbutton = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const linkClick = () => {
    setOpen(false);
    const link = document.createElement('a');
    link.href = '#';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const MessageClick = () => {
    router.push('/contact');
    setOpen(false);
  };
  return (
    <SpeedDial
      ariaLabel="speedDial"
      open={open}
      onClose={handleClose}
      icon={<SpeedDialIcon />}
      FabProps={{ style: { backgroundColor: '#3C3939' } }}
      onOpen={handleOpen}
      className="!fixed !bottom-10 !right-10 !z-[1000]"
    >
      <SpeedDialAction
        icon={<GetApp fontSize="medium" />}
        tooltipTitle={'Download Cv'}
        onClick={linkClick}
      ></SpeedDialAction>
      <SpeedDialAction
        onClick={MessageClick}
        TooltipClasses={''}
        tooltipTitle={'Get In Touch'}
        icon={<Message fontSize="medium" />}
      ></SpeedDialAction>
    </SpeedDial>
  );
};

export default Cbutton;

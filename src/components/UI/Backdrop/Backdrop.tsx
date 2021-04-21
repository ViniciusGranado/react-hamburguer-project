import React, { MouseEventHandler } from 'react';

import './Backdrop.css';

interface IProps {
  show: boolean
  clicked: MouseEventHandler
}

export const Backdrop = ({show, clicked} : IProps) => {
  return (
    show ? <div className='Backdrop' onClick={clicked}></div> : null
  );
};
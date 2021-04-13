import React from 'react';

import './Backdrop.css';

interface IProps {
  show: boolean
  clicked: any
}

export const Backdrop = ({show, clicked} : IProps) => {
  return (
    show ? <div className='Backdrop' onClick={clicked}></div> : null
  );
};
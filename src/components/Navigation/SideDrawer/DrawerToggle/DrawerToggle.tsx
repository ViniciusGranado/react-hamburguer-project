import React, { MouseEventHandler } from 'react';

import './DrawerToggle.css';

interface IProps {
  clicked: MouseEventHandler
}

export const DrawerToggle = ({clicked}: IProps) => {
  return (
    <div className='DrawerToggle' onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
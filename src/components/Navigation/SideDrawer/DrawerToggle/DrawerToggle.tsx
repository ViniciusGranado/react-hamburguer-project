import React, { MouseEventHandler } from 'react';

interface IProps {
  clicked: MouseEventHandler
}

export const DrawerToggle = ({clicked}: IProps) => {
  return (
    <div onClick={clicked}>MENU</div>
  );
}
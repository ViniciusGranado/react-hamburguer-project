import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';
import { Backdrop } from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

interface IProps {
  open: boolean
  closed: () => void
}

export const SideDrawer = ({open, closed}: IProps) => {
  return (
    <>
      <Backdrop show={open} clicked={closed}/>
      <div className={`SideDrawer ${open ? 'Open' : 'Close'}`}>
        <div className='logo-container'>
          <Logo />
        </div>

        <nav>
          <NavigationItems/>
        </nav>
      </div>
    </>
  );
}
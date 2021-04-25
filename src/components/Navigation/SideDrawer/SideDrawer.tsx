import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';

import './SideDrawer.css';

interface IProps {

}

export const SideDrawer = ({}: IProps) => {
  return (
    <div className='SideDrawer'>
      <div className='logo-container'>
        <Logo />
      </div>

      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
}
import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';


interface IProps {

}

export const SideDrawer = ({}: IProps) => {
  return (
    <div className='SideDrawer'>
      <Logo />

      <nav>
        <NavigationItems/>
      </nav>
    </div>
  );
}
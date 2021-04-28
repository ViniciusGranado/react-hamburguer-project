import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';
import { DrawerToggle } from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';

interface IProps {
  drawerToggleClicked: () => void
}

export const Toolbar = ({drawerToggleClicked}: IProps) => {
  return (
    <header className='Toolbar'>
      <DrawerToggle clicked={drawerToggleClicked}/>

      <div className='logo-container'>
        <Logo/>
      </div>

      <nav className='desktop-only'>
        <NavigationItems/>
      </nav>
    </header>
  );
}

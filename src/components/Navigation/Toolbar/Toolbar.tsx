import React from 'react';
import { Logo } from '../../Logo/Logo';
import { NavigationItems } from '../NavigationItems/NavigationItems';

import './Toolbar.css';

// interface IProps = {

// }

export const Toolbar = () => {
  return (
    <header className='Toolbar'>
      <div>MENU</div>

      <div className='logo-container'>
        <Logo/>
      </div>

      <nav className='desktop-only'>
        <NavigationItems/>
      </nav>
    </header>
  );
}
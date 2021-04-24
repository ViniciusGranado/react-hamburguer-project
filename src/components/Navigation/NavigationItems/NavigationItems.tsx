import React from 'react';
import { NavigationItem } from './NavigationItem/NavigationItem';

import './NavigationItems.css';

export const NavigationItems = () => {
  return (
    <ul className='NavigationItems'>
      <NavigationItem link='/' active>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
    </ul>
  );
}
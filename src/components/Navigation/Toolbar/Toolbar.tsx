import React from 'react';
import { Logo } from '../../Logo/Logo';

import './Toolbar.css';

// interface IProps = {

// }

export const Toolbar = () => {
  return (
    <header className='Toolbar'>
      <div>MENU</div>
      <Logo/>
      <nav>
        ...
      </nav>
    </header>
  );
}
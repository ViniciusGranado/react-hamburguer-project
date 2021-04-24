import React from 'react';

import './NavigationItem.css';

interface IProps {
  children: string
  link: string
  active?: boolean
}

export const NavigationItem = (
  {
    children,
    link,
    active,
  }: IProps) => {
  return (      
    <li className='NavigationItem'>
      <a
        href={link}
        className={active ? 'active' : undefined}
      >
        {children}
      </a>
    </li>
  );
}
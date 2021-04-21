import React, { MouseEventHandler } from 'react';

import './Button.css';

interface IProps {
  children: string
  clicked: MouseEventHandler
  btnType: string
}

export const Button = ({
  children,
  clicked,
  btnType
} : IProps) => {
  return (
    <button
      className={`Button ${btnType}`}
      onClick={clicked}
    >
      {children}
    </button>
  );
}
import React from 'react';

import './Button.css';

interface IProps {
  children: JSX.Element
  clicked: any
  btnType: string
}

export const Button = ({
  children,
  clicked,
  btnType
} : IProps) => {
  <button
    className={`Button ${btnType}`}
    onClick={clicked}
  >
    {children}
  </button>
}
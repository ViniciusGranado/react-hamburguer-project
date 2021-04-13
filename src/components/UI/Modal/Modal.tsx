import React from 'react';
import './Modal.css';

interface IProps {
  children: JSX.Element
  show: boolean
}

export const Modal = ({
  children,
  show
}: IProps) => {
  return (
    <div
      className='Modal'
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  );
};
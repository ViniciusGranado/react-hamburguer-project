import React from 'react';
import { Backdrop } from '../Backdrop/Backdrop';
import './Modal.css';

interface IProps {
  children: JSX.Element
  show: boolean
  modalClosed: () => void
}

export const Modal = React.memo(({
  children,
  show,
  modalClosed
}: IProps) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed}/>

      <div
        className='Modal'
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
}, (prevProps, nextProps) => {
  return prevProps.show === nextProps.show;
});
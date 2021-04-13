import React, { MouseEventHandler } from 'react';

import './BuildControl.css';

interface IProps {
  label: string
  removed: MouseEventHandler<HTMLButtonElement>
  added: MouseEventHandler<HTMLButtonElement>
  disabled: any
}

export const BuildControl = ({
  label,
  removed,
  added,
  disabled,
} : IProps) => {
  return (
    <div className='BuildControl'>
      <div className='Label'>{label}</div>
      
      <button
        className='Less'
        onClick={removed}
        disabled={disabled}
      >
        Less
      </button>

      <button
        className='More'
        onClick={added}
      >
        More
      </button>
    </div>
  );
}
import React from 'react';
import { BuildControl } from './BuildControl/BuildControl'

import './BuildControls.css'; 

export const BuildControls = (props: any) => {
  const controls = [
    {
      label: 'Salad',
      type: 'salad',
    },
    {
      label: 'Bacon',
      type: 'bacon',
    },
    {
      label: 'Chesse',
      type: 'chesse',
    },
    {
      label: 'Meat',
      type: 'meat',
    },
  ];


  return (
    <div className='BuildControls'>
      {controls.map((item) => {
        return <BuildControl key={item.label} label={item.label}/>
      })}
    </div>
  );
}
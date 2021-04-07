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
      type: 'cheese',
    },
    {
      label: 'Meat',
      type: 'meat',
    },
  ];


  return (
    <div className='BuildControls'>
      <p>Current Price: <strong>U${props.price.toFixed(2)}</strong></p>
      {controls.map((item) => {
        return <BuildControl 
                  key={item.label}
                  label={item.label}
                  added={() => props.ingredientAdded(item.type)}
                  removed={() => props.ingredientRemoved(item.type)}
                  disabled={props.disabled[item.type]}
                />
      })}
    </div>
  );
}
import React from 'react';
import { BuildControl } from './BuildControl/BuildControl'

import './BuildControls.css'; 

interface IDisabledInfo {
  [salad: string]: number | boolean
  bacon: number| boolean
  cheese: number| boolean
  meat:  number| boolean
}

interface IProps {
  price: number
  ingredientAdded: (type: string) => void
  ingredientRemoved: (type: string) => void
  disabled: IDisabledInfo
  purchasable: boolean
  ordered: () => void
}

export const BuildControls = ({
  price,
  ingredientAdded,
  ingredientRemoved,
  disabled,
  purchasable,
  ordered,
} : IProps) => {
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
      <p>Current Price: <strong>U${price.toFixed(2)}</strong></p>
      {controls.map((item) => {
        return <BuildControl 
                  key={item.label}
                  label={item.label}
                  added={() => ingredientAdded(item.type)}
                  removed={() => ingredientRemoved(item.type)}
                  disabled={disabled[item.type]}
                />
      })}
      <button
        className='OrderButton'
        disabled={!purchasable}
        onClick={ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
}
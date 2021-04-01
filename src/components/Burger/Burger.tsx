import React from 'react';
import { BurgerIngredient } from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

export const Burger = (props: any) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((item, index) => {
        return (
          <BurgerIngredient key={igKey + index} type={igKey} />
        );
      })
    });

  console.log(transformedIngredients);
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};
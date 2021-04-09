import React from 'react';
import { BurgerIngredient } from './BurgerIngredient/BurgerIngredient';

import './Burger.css';

export const Burger = ({
  ingredients,
}: any) => {
  let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((item, index) => {
        return (
          <BurgerIngredient key={igKey + index} type={igKey} />
        );
      });
    })
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  } 

  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
};
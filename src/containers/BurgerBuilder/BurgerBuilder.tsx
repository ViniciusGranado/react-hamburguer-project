import React, { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';


export const BurgerBuilder = () => {
  interface IBurguerIngredients {
    ingredients: {
      salad: number
      bacon: number
      cheese: number
      meat: number
    }
  }

  const [state, setState] = useState<IBurguerIngredients>(
    {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      }
    }
  );

  return (
    <>
      <Burger ingredients={state.ingredients}/>
      <div>Build Controls</div>
    </>
  );
}
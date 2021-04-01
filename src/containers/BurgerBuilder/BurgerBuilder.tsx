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
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2,
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
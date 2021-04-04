import React, { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';

export const BurgerBuilder = () => {
  interface IBurguerIngredients {
      [salad: string]: number
      bacon: number
      cheese: number
      meat:  number
  }
  interface IBurger {
    ingredients: IBurguerIngredients
    totalPrice: number
  }
  
  const [burgerState, setBurgerState] = useState<IBurger>(
    {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 2,
        meat: 0,
      },
      totalPrice: 4,
    }
  );


  interface IINGREDIENT_PRICES {
    [salad: string]: number,
    cheese: number
    meat: number
    bacon: number
  }

  const INGREDIENT_PRICES: IINGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  }

  const addIngredientHandler = (type: string) => {
    const oldCount = burgerState.ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedIngredients = {
      ...burgerState.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = burgerState.totalPrice;
    const newPrice = oldPrice + priceAddition;
    
    setBurgerState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  }

  const removeIngredientHandler = (type: string) => {
  }
  
  return (
    <>
      <Burger ingredients={burgerState.ingredients}/>
      <BuildControls 
        ingredientAdded={addIngredientHandler}/>
    </>
  );
}
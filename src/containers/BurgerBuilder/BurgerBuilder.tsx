import React, { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';
import { BuildControls } from '../../components/Burger/BuildControls/BuildControls';
import { Modal } from '../../components/UI/Modal/Modal';
import { OrderSummary } from '../../components/Burger/OrderSummary/OrderSummary';

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
    purchasable: boolean
    purchasing: boolean
  }
  
  const [burgerState, setBurgerState] = useState<IBurger>(
    {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
    }
  );

  const updatePurchaseState = (ingredients: any) => {
    const sumIngredients = Object.keys(ingredients).reduce((acc, cur) => {
      return acc + ingredients[cur];
    }, 0);

    setBurgerState({
      ...burgerState,
      ingredients: ingredients,
      purchasable: sumIngredients > 0,
    });
  }

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
      ...burgerState,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    updatePurchaseState(updatedIngredients);
  }

  const removeIngredientHandler = (type: string) => {
    const oldCount = burgerState.ingredients[type];

    if (oldCount <= 0) return;

    const updatedCount = oldCount - 1;

    const updatedIngredients = {
      ...burgerState.ingredients
    };

    updatedIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = burgerState.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    
    setBurgerState({
      ...burgerState,
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });

    updatePurchaseState(updatedIngredients);
  }
  
  const purchaseHandler = () => {
    setBurgerState({
      ...burgerState,
      purchasing: true,
    })
  }

  const purchaseCancelHandler = () => {
    setBurgerState({
      ...burgerState,
      purchasing: false,
    })
  }

  const purchaseContinueHandler = () => {
    alert('You can continue!');
  }

  interface IDisabledInfo {
    [salad: string]: number | boolean
    bacon: number| boolean
    cheese: number| boolean
    meat:  number| boolean
  }

  const disabledInfo: IDisabledInfo = {
    ...burgerState.ingredients,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Modal show={burgerState.purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={burgerState.ingredients}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        /> 
      </Modal>
      
      <Burger ingredients={burgerState.ingredients}/>
      <BuildControls 
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        price={burgerState.totalPrice}
        purchasable={burgerState.purchasable}
        ordered={purchaseHandler}
      />
    </>
  );
}
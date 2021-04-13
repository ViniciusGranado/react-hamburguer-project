import React from 'react';

interface IIngredients {
  [salad: string]: number
  bacon: number
  cheese: number
  meat:  number
}

interface IProps {
  ingredients: IIngredients
}

export const OrderSummary = ({ingredients}: IProps) => {
  const ingredientSummary = Object.keys(ingredients)
    .map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {ingredients[igKey]}
        </li>
      );
    });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>

      <ul>
        {ingredientSummary}
      </ul>

      <p>Continue to Checkout?</p>
    </>
  );
}
import React from 'react';
import { Button } from '../../UI/Button/Button';

interface IIngredients {
  [salad: string]: number
  bacon: number
  cheese: number
  meat:  number
}

interface IProps {
  ingredients: IIngredients
  purchaseCancelled: () => void
  purchaseContinued: () => void
  price: number
}

export const OrderSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinued,
  price,
}: IProps) => {
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

      <p><strong>Total Price: U${price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>

      <Button btnType='Danger' clicked={purchaseCancelled}>CANCEL</Button>
      <Button btnType='Success' clicked={purchaseContinued}>CONTINUE</Button>
    </>
  );
}
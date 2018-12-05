import * as actionTypes from '../actions/actionTypes';
// import { stat } from 'fs';

const intialState = {
    ingredients: null,
    totalPrice: 2.25,
    error: false
};

const INGREDIENT_PRICES = { salad: 0.5, cheese: 1.9, bacon: 3.7, meat: 2.8 };

const reducer = (state = intialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.SET_INGREDIENTS: 
      return {
        ...state,
        ingredients: {
          salad:action.ingredients.salad,
          bacon:action.ingredients.bacon,
          cheese:action.ingredients.cheese,
          meat:action.ingredients.meat
        },
        error: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED: 
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
};

export default reducer;
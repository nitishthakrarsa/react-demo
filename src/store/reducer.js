import * as actionTypes from './actions';

const intialState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 2.25,
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
          totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
          totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        }
      };
    default:
      return state;
  }
};

export default reducer;
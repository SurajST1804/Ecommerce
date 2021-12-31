import * as types from "../Action/Actiontypes";
let initialState = {
  basket: [],
};

let CartReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_BASKET:
      let basketItem = [...state.basket, action.payload];
      return { ...state, basket: basketItem };
    default:
      return state;
  }
};

export default CartReducers;

import * as types from "./Actiontypes";

export let basket = item => {
  return { type: types.ADD_TO_BASKET, payload: item };
};

import { BUY_ICE_CREAM } from "./iceCreamTypes";

const initialState = {
  numOfIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  if (action.type === BUY_ICE_CREAM) {
    return {
      ...state,
      numOfIceCream: state.numOfIceCream - 1,
    };
  }
  return state;
};

export default iceCreamReducer;

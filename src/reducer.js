export const initialState = {
  basket: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
      // eslint-disable-next-line
      break;
    case "REMOVE_FROM_BASKET":
      //Logic for Removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );

      if (index >= 0) {
        //remove item
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id})`);
      }

      return { ...state, basket: newBasket };
      // eslint-disable-next-line
      break;
    default:
      return state;
  }
}

export default reducer;

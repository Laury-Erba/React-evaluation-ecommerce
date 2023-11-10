const initialState = {
  items: [],
  cart: [],
};

const reducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case "UPLOADITEMS":
      return {
        ...state,
        items: action.payload
      }

    case "ADDITEM":
      const product = action.payload;

      console.log(state.cart);

      // vérifier que le produits exist
      const exist = state.cart.some((cartItem
        ) => cartItem
      .id === product.id);
      if (exist) {
        // augmenter la quantité
        return state.cart.map((cartItem
          ) =>
          cartItem
          .id === product.id ? { ...cartItem
            , qty: cartItem
            .qty + 1 } : cartItem
        );

      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { product, qty: 1 }
          ]
        };
      }

    case "DELETEITEM":
      const item = state.cart.find((cartItem) => cartItem.id === product.id);
      if (item.qty === 1) {
        return state.cart.filter((cartItem) => cartItem.id !== item.id);
      } else {
        return state.cart.map((cartItem) =>
          cartItem.id === product.id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
        );
      }

    default:
      return state;
  }
};

export default reducer;

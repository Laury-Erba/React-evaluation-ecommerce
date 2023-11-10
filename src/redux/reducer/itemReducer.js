const initialState = {
  items: [],
  cart: [],
};

const itemReducer = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case "UPLOADITEMS":
      return {
        ...state,
        items: action.payload,
      };

    case "ADDITEM":

      console.log(state.cart);

      // vérifier que le produit existe
      const exist = state.cart.some((cartItem) => cartItem.id === product.id);

      if (exist) {
        const updatedCart = state.cart.map((cartItem) => ({
          ...cartItem,
          qty: cartItem.qty + 1,
        }));
        return {
          ...state,
          cart: updatedCart,
        };

        // if item is not in cart
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, qty: 1 }],
        };
      }

    case "DELETEITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== product.id)
      }

    default:
      return state;
  }
};

export default itemReducer;

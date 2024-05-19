export const ProductsReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ALL_PRODUCTS": {
      return {
        ...state,
        allProducts: action.allProducts,
        tempProducts: action.allProducts,
        isLoading: false,
      };
    }
    case "ASCENDING": {
      return { ...state, tempProducts: action.data };
    }
    case "DESCENDING": {
      return { ...state, tempProducts: action.data };
    }
    case "ADD_DATA_CART": {
      const newCartData = action.data;
      return { ...state, cart: [...state.cart, newCartData] };
    }
    case "DELETEITEM": {
      const updatedData = state.cart.filter((item: any) => {
        return action.id !== item.id;
      });
      return { ...state, cart: updatedData };
    }
    case "ISLOADING": {
      return { ...state, isLoading: action.data };
    }
    case "FILTERCATEGORY": {
      const updatedData = state.allProducts.filter(
        (item: any) => item.category === action.data
      );
      return { ...state, tempProducts: updatedData };
    }
    case "CLEARFILTER": {
      return { ...state, tempProducts: state.allProducts };
    }
    default:
      return state;
  }
};

import { createContext, useContext, useEffect, useReducer } from "react";
import { ProductsReducer } from "../reducer/ProductsReducer";

interface initStateInt {
  allProducts: any;
  tempProducts: any;
  isLoading: boolean;
  isError: boolean;
  sortingFun: any;
  cart: any;
  addToCart: any;
  removeAddedItem: any;
  handleCategory: any;
  handleClearFiter: any;
}
const initState = {
  allProducts: [],
  tempProducts: [],
  isLoading: false,
  isError: false,
  sortingFun: () => {},
  addToCart: () => {},
  removeAddedItem: () => {},
  handleCategory: () => {},
  handleClearFiter: () => {},
  cart: [],
};
const pContext = createContext<initStateInt>(initState);
export const ProductsContext = ({ children }: any) => {
  const [state, dispatch] = useReducer(ProductsReducer, initState);

  const fetcProducts = async () => {
    dispatch({ type: "ISLOADING", data: true });
    const res = await fetch("https://api.pujakaitem.com/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({ type: "ALL_PRODUCTS", allProducts: data });
  };
  useEffect(() => {
    fetcProducts();
  }, []);

  const sortingFun = (e: any) => {
    const ascendingOrd = (a: any, b: any) => {
      return a.price - b.price;
    };
    const descendingOrd = (a: any, b: any) => {
      return b.price - a.price;
    };
    e.target.id === "ascending"
      ? dispatch({
          type: "ASCENDING",
          data: state.tempProducts.sort(ascendingOrd),
        })
      : dispatch({
          type: "DESCENDING",
          data: state.tempProducts.sort(descendingOrd),
        });
  };
  const addToCart = (item: any) => {
    item.qty = 1;
    item.inStock = 5;
    dispatch({ type: "ADD_DATA_CART", data: item });
  };
  const removeAddedItem = (id: any) => {
    dispatch({ type: "DELETEITEM", id: id });
  };
  const handleCategory = (filterData: any) => {
    // console.log("filter pro", filterData);
    dispatch({ type: "FILTERCATEGORY", data: filterData });
  };
  const handleClearFiter = () => {
    dispatch({ type: "CLEARFILTER" });
  };
  return (
    <pContext.Provider
      value={{
        ...state,
        addToCart,
        sortingFun,
        removeAddedItem,
        handleCategory,
        handleClearFiter,
      }}
    >
      {children}
    </pContext.Provider>
  );
};

export const useAllProduct = () => {
  return useContext(pContext);
};

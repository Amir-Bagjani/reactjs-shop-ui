import { useState, createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  products: [],
  count: 0,
  total: 0
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      //if alredy payload exist, ignore that
      // const ind = [...state.products].findIndex(i => i.id.toString() === action.payload.id.toString())
      // if(ind === -1) return { ...state, products: [...state.products, action.payload] };
      return { ...state, products: [...state.products, action.payload] };

    case "DELETE":
      return {...state, products: [state.products.filter((item) => item.id !== action.payload.id)]};

    case "INC_ITEM":
      const inc = [...state.products].map((item) => {
        if (item.id.toString() === action.payload.toString()) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, products: [...inc] };

    case "DEC_ITEM":
      const dec = [...state.products].map((item) => {
          if (item.id.toString() === action.payload.toString()) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }).filter((item) => item.quantity !== 0);
      return { ...state, products: [...dec] };

    case "CHECKOUT":
      return initialState;

    case "TOTAL":
      return { ...state, total: action.payload };

    case "COUNT":
      return { ...state, count: action.payload };

    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
    const localCart = localStorage.getItem(`cart`);
    return localCart ? JSON.parse(localCart) : initialState;
  });

  //total amount
  useEffect(() => {
    dispatch({ type: "TOTAL", payload: 0 });
    let su = 0;
    if (cart.products.length > 0) {
      cart.products.forEach((item) => (su += item.quantity * item.price));
      dispatch({ type: "TOTAL", payload: su });
    }
  }, [cart.products]);

  //count
  useEffect(() => {
    dispatch({ type: "COUNT", payload: cart.products.length });
  }, [cart.products]);

  //store in localstorage
  useEffect(() => {
    localStorage.setItem(`cart`, JSON.stringify(cart));
  }, [cart.products]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

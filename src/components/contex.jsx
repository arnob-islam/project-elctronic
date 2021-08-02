import React, { createContext, useContext, useEffect, useReducer, useCallback } from "react";
import Reducer from './Reducer';
import { ADD_TO_CART_LIST, ADD_TO_CART_WISHLIST, REMOVE_SINGLE_ITEM, INCREACE_QUANTITY, PRODUCT_SUCCESS, DECREACE_QUANTITY, SET_TOTAL_PRICE, REMOVE_SINGLE_FROM_WISHLIST, SHOW_ONLY_SINGLE, INCREACE_DETAILS_SINGLEI_ITEM, DECREACE_DETAILS_SINGLEI_ITEM, ADD_TO_CART_LIST_FROM_SINGLE_DETAILS } from './Typed';
// import dotenv from 'dotenv'


const ContextProvider = createContext();

const initialState = {
  dislayLoading: true,
  productItems: [],
  cartItem: [],
  wishItem: [],
  total: 0,
  amount: 0,
  singleItem: [],
}
const url = `https://previewux.github.io/project-data-electronics/`;
// dotenv.config({ path: '../config.env' })
// dotenv.config()

// const REACT_APP_PRODUCT_API = process.env
// console.log(dotenv.config({ path: './config.env' }));

const Contex = ({ children }) => {

  const [productItems, dispatch] = useReducer(Reducer, initialState)


  const ADD_TO_CART = useCallback((id) => {
    dispatch({ type: ADD_TO_CART_LIST, payload: id })
  }, [])


  const ADD_TO_WISH = useCallback((id) => {
    dispatch({ type: ADD_TO_CART_WISHLIST, payload: id })
  }, [])



  const REMOVE_ITEM_FROM_CART = useCallback((id) => {
    dispatch({ type: REMOVE_SINGLE_ITEM, payload: id })
  }, [])

  const REMOVE_ITEM_FROM_WISH_LIST = useCallback((id) => {
    dispatch({ type: REMOVE_SINGLE_FROM_WISHLIST, payload: id })
  }, [])



  const INCREACE_SINGLE_ITEM = useCallback((id) => {
    dispatch({ type: INCREACE_QUANTITY, payload: id })
  }, [])


  const DECREACE_SINGLE_ITEM = useCallback((id) => {
    dispatch({ type: DECREACE_QUANTITY, payload: id })
  }, [])


  const SHOW_ONLY_SINGLE_ITEM = useCallback((id) => {
    dispatch({ type: SHOW_ONLY_SINGLE, payload: id })
  }, [])


  const INCREACE_DETAILS_ITEM_SINGLE = useCallback((id) => {
    dispatch({ type: INCREACE_DETAILS_SINGLEI_ITEM, payload: id })
  }, [])


  const DECREASE_DETAILS_ITEM_SINGLE = useCallback((id) => {
    dispatch({ type: DECREACE_DETAILS_SINGLEI_ITEM, payload: id })
  }, [])


  const ADD_TO_CART_FROM_SINGLE_DETAILS = useCallback((id) => {
    dispatch({ type: ADD_TO_CART_LIST_FROM_SINGLE_DETAILS, payload: id })
  }, [])



  useEffect(() => {
    dispatch({ type: SET_TOTAL_PRICE })
  }, [productItems.cartItem])






  const dataFetching = async () => {

    try {
      const response = await fetch(url);
      const data = await response.json();

      dispatch({ type: PRODUCT_SUCCESS, payload: data })


    } catch (resp) {

      console.log('something is very wrong');
    }

  };

  useEffect(() => {
    dataFetching();
  }, []);

  return (
    <ContextProvider.Provider value={{
      ...productItems, ADD_TO_CART, ADD_TO_WISH, REMOVE_ITEM_FROM_CART, INCREACE_SINGLE_ITEM, DECREACE_SINGLE_ITEM, REMOVE_ITEM_FROM_WISH_LIST, SHOW_ONLY_SINGLE_ITEM, INCREACE_DETAILS_ITEM_SINGLE, DECREASE_DETAILS_ITEM_SINGLE, ADD_TO_CART_FROM_SINGLE_DETAILS
    }}>
      {children}
    </ContextProvider.Provider>
  );
};

export const UseContextGlobally = () => {
  return useContext(ContextProvider);
};

export default Contex;

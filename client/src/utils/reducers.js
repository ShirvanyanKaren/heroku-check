import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    SET_CATEGORIES,
    CLEAR_CART,
    TOGGLE_CART,
    SAVE_USER,
    SET_STOCK_WEIGHTS,
  } from "./actions";
  
  // initial state of the store
  const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    burgerClick: false,
    currentCategory: "",
    stores: [],
    user: [],
    currencyRates: [],
    stockWeights: {},
  };
  
  // export the reducer function
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products],
        };
  
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product],
        };
  
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
  
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map((product) => {
            if (action._id === product._id) {
              return { ...product, purchaseQuantity: action.purchaseQuantity };
            }
            return product;
          }),
        };
  
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product._id !== action._id;
        });
  
        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };
  
      case TOGGLE_CART:
        return {
          ...state,
          cartOpen: !state.cartOpen,
        };
  
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        };
  
      case SET_CATEGORIES:
        return {
          ...state,
          categories: action.payload,
        };
  
      case SAVE_USER:
        console.log("SAVE_USER action dispatched with payload:", action.payload);
        console.log(action.payload);
        return {
          ...state,
          user: { id: action.payload },
        };
      case SET_STOCK_WEIGHTS:
        console.log("SET_STOCK_WEIGHTS action dispatched with payload:", action.payload);
        return {
          ...state,
          stockWeights: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  
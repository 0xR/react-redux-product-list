const LOAD = 'redux-example/products/LOAD';
const LOAD_SUCCESS = 'redux-example/products/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/products/LOAD_FAIL';

import getProducts from 'services/ProductService';

const initialState = {
  loading: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        products: [],
        error: 'Error loading products'
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.widgets && globalState.widgets.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    payload: {
      promise: getProducts('broek'),
      query: 'broek'
    }
  };
}



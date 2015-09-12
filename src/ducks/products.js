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
        products: action.result.products,
        error: null
      };
    case LOAD_FAIL:
      console.log('error', action);
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

export function isLoaded({products}) {
  return products && !products.loading && !products.error;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => getProducts(client, 'broek'),
    query: 'broek'
  };
}



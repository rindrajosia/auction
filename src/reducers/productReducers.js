import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  FILTER_PRODUCT,
  ORDER_PRODUCTS_BY_PRICE,
} from '../constants/productConstants';

export const productListReducer = (state = {products: [], filteredItems: [], sort: ""}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [], filteredItems: [] };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload, filteredItems: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
	case FILTER_PRODUCT:
      return { ...state, loading: false, filteredItems: action.payload.products };
	case ORDER_PRODUCTS_BY_PRICE:
      return {
		...state, 
        loading: false,
        filteredItems: action.payload.products,
        sort: action.payload.sort,
      };
    default:
      return state;
  }
}

export const productDetailsReducer = (state = {product: []}, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const createProductReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loadingProduct: true, ...state };
    case CREATE_PRODUCT_SUCCESS:
      return { loadingProduct: false, product: action.payload };
    case CREATE_PRODUCT_FAIL:
      return { loadingProduct: false, errorProduct: action.payload };
    default:
      return state;
  }
}

export const updateProductReducer = (state = { }, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { loading: true, ...state };
    case UPDATE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case UPDATE_PRODUCT_FAIL:
      return { loading: false, errorProduct: action.payload };
    default:
      return state;
  }
}

export const deleteProductReducer = (state = { }, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true, ...state };
    case DELETE_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
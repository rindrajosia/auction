import axios from 'axios';

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
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  FILTER_PRODUCT,
  ORDER_PRODUCTS_BY_PRICE
} from '../constants/productConstants';


export const sortProducts = (items, sort) => (dispatch) => {
  const products = items.slice();
  if (sort !== "") {
    products.sort((a, b) =>
      sort === "lowestprice"
        ? a.regular_price > b.regular_price
          ? 1
          : -1
        : a.regular_price < b.regular_price
        ? 1
        : -1
    );
  } else {
    products.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      products: products,
    },
  });
};


export const filterProducts = (products, title, description) =>(dispatch) => {

	const resultTitle = title === "" ? products : products.filter(product => product.title.toUpperCase().includes(title.toUpperCase()));
	const resultDesription = description === "" ? resultTitle : resultTitle.filter(product => product.description.toUpperCase().includes(description.toUpperCase()));

  return dispatch({
	  type: FILTER_PRODUCT,
	  payload:{
		 products: resultDesription
	  }
  })
}

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const response = await axios.get('/api/product');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: response.data,
     });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     });
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const response = await axios.get(`/api/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: response.data,
     });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     });
  }
}

export const createProduct = (donnee, history) => async (dispatch, getState) => {
	dispatch({
      type: CREATE_PRODUCT_REQUEST
    })


	axios.post('/api/product', donnee)
			  .then(response => {
				    dispatch({
					type: CREATE_PRODUCT_SUCCESS,
					payload: response.data
				  })
				  history.push("/");
			  })
			  .catch (error => {
					dispatch({
					  type: CREATE_PRODUCT_FAIL,
					  payload:
						error.response && error.response.data.message
						  ? error.response.data
						  : error.message
					 });
				})
}


export const updateProduct = (donnee, product_id, history) => async (dispatch, getState) => {
	dispatch({
      type: UPDATE_PRODUCT_REQUEST
    })


	axios.put(`/api/product/${product_id}`, donnee)
			  .then(response => {
				    dispatch({
					type: UPDATE_PRODUCT_SUCCESS,
					payload: response.data
				  })
				 history.push("/");
			  })
			  .catch (error => {
					dispatch({
					  type: CREATE_PRODUCT_FAIL,
					  payload:
						error.response && error.response.data.message
						  ? error.response.data
						  : error.message
					 });
				})
}


export const deleteProduct = (product_id, history) => async (dispatch, getState) => {
	dispatch({
      type: DELETE_PRODUCT_REQUEST
    })

	axios.delete(`/api/product/${product_id}`)
			  .then(response => {
				    dispatch({
					type: DELETE_PRODUCT_SUCCESS,
					payload: response.data
				  })
				  history.push("/");
			  })
			  .catch (error => {
					dispatch({
					  type: DELETE_PRODUCT_FAIL,
					  payload:
						error.response && error.response.data.message
						  ? error.response.data
						  : error.message
					 });
				})
}

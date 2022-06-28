import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
  createProductReducer,
  updateProductReducer,
  deleteProductReducer
} from './reducers/productReducers';

import {
  userLoginReducer,
} from './reducers/userReducers';

import {
  bidListReducer,
  createBidReducer,
} from './reducers/bidReducers';

import {
  cloudinaryReducer
} from './reducers/cloudinaryReducers';

import {
  fundListReducer,
  createFundReducer
} from './reducers/fundReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  bidList: bidListReducer,
  userLogin: userLoginReducer,
  createProduct: createProductReducer,
  imageUrl: cloudinaryReducer,
  fundList: fundListReducer,
  createFund: createFundReducer,
  upProduct: updateProductReducer,
  delProduct: deleteProductReducer,
  createBid: createBidReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
 };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;


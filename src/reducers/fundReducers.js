import {
  FUND_REQUEST,
  FUND_SUCCESS,
  FUND_FAIL,
  CREATE_FUND_REQUEST,
  CREATE_FUND_SUCCESS,
  CREATE_FUND_FAIL
} from '../constants/fundConstants';

export const fundListReducer = (state = {fund: []}, action) => {
  switch (action.type) {
    case FUND_REQUEST:
      return { loading: true, fund: [] };
    case FUND_SUCCESS:
      return { loading: false, fund: action.payload };
    case FUND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}



export const createFundReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATE_FUND_REQUEST:
      return { loading: true, ...state };
    case CREATE_FUND_SUCCESS:
      return { loading: false, fund: action.payload };
    case CREATE_FUND_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
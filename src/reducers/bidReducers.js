import {
  BID_LIST_REQUEST,
  BID_LIST_SUCCESS,
  BID_LIST_FAIL,
  CREATE_BID_REQUEST,
  CREATE_BID_SUCCESS,
  CREATE_BID_FAIL
} from '../constants/bidConstants';

export const bidListReducer = (state = {bids: []}, action) => {
  switch (action.type) {
    case BID_LIST_REQUEST:
      return { loading: true, bids: [] };
    case BID_LIST_SUCCESS:
      return { loading: false, bids: action.payload };
    case BID_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const createBidReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATE_BID_REQUEST:
      return { loading: true, ...state };
    case CREATE_BID_SUCCESS:
      return { loading: false, bid: action.payload };
    case CREATE_BID_FAIL:
      return { loading: false, bid: action.payload };
    default:
      return state;
  }
}

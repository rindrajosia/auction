import axios from 'axios';

import {
  BID_LIST_REQUEST,
  BID_LIST_SUCCESS,
  BID_LIST_FAIL,
  CREATE_BID_REQUEST,
  CREATE_BID_SUCCESS,
  CREATE_BID_FAIL
} from '../constants/bidConstants';

export const listBid = (product_id) => async (dispatch) => {
  try {
    dispatch({ type: BID_LIST_REQUEST });

    const response = await axios.get(`/api/bid/${product_id}`);

    dispatch({
      type: BID_LIST_SUCCESS,
      payload: response.data,
     });
  } catch (error) {
    dispatch({
      type: BID_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     });
  }
}

export const addBid = (donnee) => async (dispatch, getState) => {
	dispatch({
      type: CREATE_BID_REQUEST
    })
	
	const { userLogin: { userInfo } } = getState();
	let status = 0;
	if(donnee.stat){
		status = 1;
	}
	const data = {...donnee, user_id: userInfo.id, status: status };
	
	
	axios.post('/api/bid', data)
			  .then(response => {
				    dispatch({
					type: CREATE_BID_SUCCESS,
					payload: response.data
				  })
			  })
			  .catch (error => {
					dispatch({
					  type: CREATE_BID_FAIL,
					  payload:
						error.response && error.response.data.message
						  ? error.response.data
						  : error.message
					 });
				})
}

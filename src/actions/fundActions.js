import axios from 'axios';

import {
  FUND_REQUEST,
  FUND_SUCCESS,
  FUND_FAIL,
  CREATE_FUND_REQUEST,
  CREATE_FUND_SUCCESS,
  CREATE_FUND_FAIL
} from '../constants/fundConstants';

export const listFund = (user_id) => async (dispatch) => {
  try {
	dispatch({
      type: FUND_REQUEST
    })
    const response = await axios.get(`/api/fund/${user_id}`);

    dispatch({
      type: FUND_SUCCESS,
      payload: response.data,
     });
  } catch (error) {
    dispatch({
      type: FUND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     });
  }
}


export const addFund = (donnee, history ) => async (dispatch, getState) => {
	dispatch({
      type: CREATE_FUND_REQUEST
    })
	
	const { userLogin: { userInfo } } = getState();
	
	const data = {...donnee, user_id: userInfo.id};
	
	
	axios.post('/api/fund', data)
			  .then(response => {
				    dispatch({
					type: CREATE_FUND_SUCCESS,
					payload: response.data
				  })
				  history.push("/");
			  })
			  .catch (error => {
					dispatch({
					  type: CREATE_FUND_FAIL,
					  payload:
						error.response && error.response.data.message
						  ? error.response.data
						  : error.message
					 });
				})
}
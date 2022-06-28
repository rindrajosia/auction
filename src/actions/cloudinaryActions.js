import axios from 'axios';

import {
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAIL
} from '../constants/cloudinaryConstants';

export const uploadImage = (image) => async (dispatch) => {
  
    dispatch({
      type: UPLOAD_IMAGE_REQUEST
    })
	
	const cloud = new FormData();
	cloud.append("file", image);
	cloud.append("upload_preset", "scopic");
	
	 fetch('https://api.cloudinary.com/v1_1/rindrajosia/image/upload', {
      method: 'POST',
      body: cloud,
    })
      .then(response => response.json())
	  .then(response => {
		 dispatch({
			type: UPLOAD_IMAGE_SUCCESS,
			payload: response.secure_url
		  });
      })
	.catch (error => {
    dispatch({
      type: UPLOAD_IMAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     });
  })
}
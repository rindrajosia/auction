import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Pusher from 'pusher-js';

const Notification = ({userInfo}) => {

	const [message, setMessage] = useState();
	useEffect(() => {
			let pusher = new Pusher('d4fc3a5d308708f8a9d9', {
			  cluster: 'mt1'
			});

			let channel = pusher.subscribe(`my-channel-${userInfo.id}`);
			channel.bind('my-event', function(data) {
			  setMessage(JSON.stringify(data));
				<Alert variant="success">
		      {JSON.stringify(data)}
	    	</Alert>
			});
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return (
		<section className="browse my-5">
		  <div className="container">
			<div className="row">

			  <div className="col-md-12">
				{ message && message}
			  </div>
			</div>
		  </div>
		</section>
	)
}

export default Notification;

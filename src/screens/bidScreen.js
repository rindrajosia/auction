import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listBid } from '../actions/bidActions';



const Bids = ({ product_id }) => {

	const dispatch = useDispatch();

	const bidList = useSelector(state => state.bidList);

	const { loading, error, bids } = bidList;

	useEffect(() => {
		dispatch(listBid(product_id));
	}, [dispatch, product_id]);

  return (
    <div className="card mb-3">

		<h5 className="card-header bg-primary text-white">BID HISTORY</h5>
			{loading ? (
			<Loader />
		  ) : error ? (
			<Message variant='Danger'>{ error }</Message>
		  ) :(
			<div className="card-body">
				<ul className="list-group mb-3">
					{bids.map(bid =>(
						<li key={bid.id} className="list-group-item">
							Bid amount: {bid.bid_amount}$
							User: {bid.bidder.name}
							Date: {bid.created_at}</li>
					))}

				</ul>
			</div>
		 )}

	</div>
  )
}

export default Bids;

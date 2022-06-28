import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Col, Row } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { addBid } from '../actions/bidActions';



const BidFormScreen = ({ product_id, history }) => {
	const [bids, setBid] = useState({
		bid_amount: "", stat: false, product_id: product_id
	});
	
	
	const handleChange = e => {
    const { name, value } = e.target;
	if(name != "stat"){
		setBid({ ...bids, [name]: value });
	}else{
		setBid({ ...bids, [name]: !bids.stat });
	}
  };

	const [errorSubmit, setError] = React.useState("");
	
	const dispatch = useDispatch();

	const bidC = useSelector(state => state.createBid);

	const { loading, error, bid } = bidC;

	const submitHandler = e => {
		e.preventDefault();
		setError("")
		
		console.log(bids.stat);
		if(bids.bid_amount != ""){
			
			dispatch(addBid(bids))
		}else {
			setError("Please add bid amount start");
		}
		
	}
  return (
    <div className="card mb-3">
		
		<h5 className="card-header bg-primary text-white">Add BID</h5>
			
				<div className="card-body">
								{error && <Message variant='danger'>{ error }</Message>}
								{errorSubmit && <Message variant='danger'>{ errorSubmit }</Message>}
								{loading && <Loader />}
								{bid && <Message variant='primary'>{ bid.message }</Message>}
								
								<form onSubmit={submitHandler}>
									<div className="form-group">
										<label>Bid amount</label>
										<input
											type="number"
											name="bid_amount"
											className="form-control"
											placeholder="Bid amount"
											value={bids.bid_amount}
											onChange={handleChange}
											required
										/>
									</div>
									
									<div className="form-group">
										<label>Or Check to activate Auto bidding</label>
										<input 
											type="checkbox"
											name="stat"
											className="form-control"
											checked={bids.stat}
											onChange={handleChange}
										/>
										
									</div>
									
									
									<Button 
										type='submit' 
										className="btn btn-primary btn-block" 
										variant='primary'
										>
									  Sing in
									</Button>
								  </form>
								
								
							</div>
			
	</div>
  )
}

export default BidFormScreen;
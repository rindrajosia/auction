import React, { useEffect } from 'react';
import CountDownTimer from "./CountDownTimer";
import Loader from '../components/Loader';
import Message from '../components/Message';
import Bids from './bidScreen';
import BidFormScreen from './BidFormScreen';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';

const ProductScreen = ({ match, history }) => {
  
    const dispatch = useDispatch();
	const userLogin = useSelector( (state) => state.userLogin);
	const { userInfo } = userLogin;

	const productDetails = useSelector(state => state.productDetails);

	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match.params.id]);
	

	
	const calculateDate = (end_date) => {
		const date1 = new Date(end_date); 
		const Diff_temps = date1.getTime() - new Date().getTime(); 
		const Diff_jours = Diff_temps / (1000 * 3600 * 24); 
		const DAYS_DIFF_IN_MS = Math.round(Diff_jours) * 24 * 60 * 60 * 1000;
		const NOW_IN_MS = new Date().getTime();
		const dateTimeAfter = NOW_IN_MS + DAYS_DIFF_IN_MS;
		return new Date(dateTimeAfter)
	}
  
  return (
    <section className="bootcamp mt-5">
       <div className="container">
		 {loading ? (
			<Loader />
		  ) : error ? (
			<Message variant='Danger'>{ error }</Message>
		  ) :(
         <div className="row">
           <div className="col-md-8">
				<h1>{product.title}</h1>
				<p>{product.description}</p>
			   
				<p className="lead mb-4">Regular Price: <span className="text-primary">{product.regular_price} $</span></p>
				<p className="lead mb-4">Bid start: <span className="text-primary">{product.start_bid}</span></p>
				
				{ userInfo && (userInfo.role_id == 2 && (
				<BidFormScreen product_id={match.params.id} />
				))}
				{ userInfo && (userInfo.role_id == 1 && (
				<Bids product_id={match.params.id} />
				))}
			</div>
           <div className="col-md-4">

				  <img src={product.image} className="img-thumbnail" alt={product.name} />


				 <div className="btn btn-dark btn-block my-3">
						<CountDownTimer targetDate={calculateDate(product.bid_end_date)} />
				 </div>

			
			
          </div>
         </div>
		 )}
       </div>
    </section>
  )
}

export default ProductScreen;

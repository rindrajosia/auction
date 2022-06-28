import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { uploadImage } from '../actions/cloudinaryActions';
import { createProduct } from '../actions/productActions';
import { Redirect } from 'react-router-dom';

const ProductFormScreen = ({ location, history }) => {

	const [products, setProduct] = useState({
		title: '', description: '', regular_price: '', start_bid: '', image: '', bid_end_date: ''
	});
	
	const handleChange = e => {
    const { name, value } = e.target;
    if (name !== 'image') {
      setProduct({ ...products, [name]: value });
    } else {
      setProduct({ ...products, [name]: e.target.files[0] });
    }
  };
	
	const dispatch = useDispatch();
	
	const imgUrl = useSelector(state => state.imageUrl);

	const { loading, error, imageUrl } = imgUrl;
	
	const createProd = useSelector(state => state.createProduct);
	

	const { loadingProduct, errorProduct, product } = createProd;
	
	  useEffect(() => {
		if(imageUrl) {
		  const data = { ...products, image: imageUrl};
		  dispatch(createProduct(data, history))
		}
	  }, [imageUrl]);
	  
	
	const submitHandler = e => {
		e.preventDefault();
		dispatch(uploadImage(products.image))
	}
 

  return (
		<section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Create Product</h1>
								{error && <Message variant='danger'>{ error }</Message>}
								{loading && <Loader />}
								{errorProduct && <Message variant='danger'>{ errorProduct }</Message>}
								{loadingProduct && <Loader />}
								{product && <Message variant='primary'>{ product.message }</Message>}
								
								
								
								<form onSubmit={submitHandler}>
									
									<div className="form-group">
										<label>Title</label>
										<input
											type="text"
											name="title"
											className="form-control"
											placeholder="Title"
											value={products.title}
											onChange={handleChange}
											required
										/>
									</div>
									
									<div className="form-group">
										<label>Description</label>
										<textarea
											name="description"
											required
											rows="5"
											className="form-control"
											placeholder="Description (What you offer, etc)"
											minLength="10"
											value={products.description}
											onChange={handleChange}
											disabled={product != null}
										></textarea>
										<small className="form-text text-muted"
											>Not less than 10 characters</small
										>
									</div>
									
							
									<div className="form-group">
										<label>Price</label>
										<input
											type="number"
											name="regular_price"
											className="form-control"
											placeholder="Price"
											value={products.regular_price}
											onChange={handleChange}
											required
										/>
									</div>
									
									<div className="form-group">
										<label>Bid amount start</label>
										<input
											type="number"
											name="start_bid"
											className="form-control"
											placeholder="Bid amount start"
											value={products.start_bid}
											onChange={handleChange}
											required
										/>
									</div>
									
									<div className="form-group">
										<label>Bid End Date</label>
										<input
											type="text"
											name="bid_end_date"
											value={products.bid_end_date}
											onChange={handleChange}
											required
											className="form-control"
										/>
									</div>
									<small className="form-text text-muted"
											>Format should YYYY-MM-DD</small
										>
									
								
									
									
									<div className="form-group">
										<label>Product Image</label>
										<input
											type="file"
											onChange={handleChange}
											name="image"
											multiple={false}
											accept="/images/*"
											required
											className="form-control"
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
					</div>
				</div>
			</div>
		</section>
  )
}

export default ProductFormScreen;
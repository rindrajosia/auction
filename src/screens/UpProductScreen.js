import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';
import { updateProduct } from '../actions/productActions';

const UpProductScreen = ({ match, history }) => {

	const [products, setProduct] = useState({
		title: '', description: '', regular_price: ''
	});


	const handleChange = e => {
		const { name, value } = e.target;
		setProduct({ ...products, [name]: value });

  };
	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.productDetails);

	const upProduct = useSelector(state => state.upProduct);

	const { loading, error, product } = upProduct;


	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match.params.id]);

	useEffect(() => {
		setProduct({...productDetails.product});
	}, [productDetails.product]);


	const submitHandler = e => {
		e.preventDefault();
		dispatch(updateProduct(products, match.params.id, history))
	}


  return (
		<section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Update Product</h1>
								{error && <Message variant='danger'>{ error }</Message>}
								{loading && <Loader />}
								{error && <Message variant='danger'>{ error }</Message>}
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






									<Button
										type='submit'
										className="btn btn-primary btn-block"
										variant='primary'
										>
									  Update
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

export default UpProductScreen;

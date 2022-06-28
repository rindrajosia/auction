import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
import { listProductDetails } from '../actions/productActions';
import { deleteProduct } from '../actions/productActions';

const DeleteProductScreen = ({ match, history }) => {
	const [products, setProduct] = useState({
		title: ''
	});

	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.productDetails);

	const delProduct = useSelector(state => state.delProduct);

	const { loading, error, product } = delProduct;


	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match.params.id]);

	useEffect(() => {
		setProduct({...productDetails.product});
	}, [productDetails.product]);


	const submitHandler = e => {
		e.preventDefault();
		dispatch(deleteProduct(match.params.id, history))
	}


  return (
		<section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Delete Product</h1>
								{error && <Message variant='danger'>{ error }</Message>}
								{loading && <Loader />}
								{error && <Message variant='danger'>{ error }</Message>}



								<form onSubmit={submitHandler}>

									<div className="form-group">
										<label>Title</label>
										<input
											type="text"
											name="title"
											className="form-control"
											placeholder="Title"
											value={products.title}
											disabled={false}
										/>
									</div>






									<Button
										type='submit'
										className="btn btn-primary btn-block"
										variant='primary'
										>
									  Delete
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

export default DeleteProductScreen;

import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Product = ({ product }) => {

	const userLogin = useSelector( (state) => state.userLogin);
	const { userInfo } = userLogin;


  return (

           <div className="card mb-3">
						<div className="row no-gutters">
							<div className="col-md-4">
									<img src={product.image} className="card-img" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">
										<Link to={`/product/${product.id}`}>
			                      {product.title}
										</Link>
									</h5>
									<span className="badge badge-dark mb-2">Price: {product.regular_price} $</span>
									<p className="card-text">
											{product.description}
									</p>
									{ userInfo && (userInfo.role_id === 1 && (
									<Link to={`/product/up/${product.id}`} className="badge badge-dark mb-2">
										<input type="submit" value="Update" className="btn btn-primary btn-block" />
									</Link>
									))}
									{userInfo && (userInfo.role_id === 1 && (
									<Link to={`/product/del/${product.id}`} className="badge badge-dark mb-2 float-right">
										<input type="submit" value="Delete" className="btn btn-primary btn-block" />
									</Link>
									))}
								</div>
							</div>
						</div>
		</div>

  )
}

export default Product;

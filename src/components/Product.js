import React from 'react';
import { Link } from 'react-router-dom'


const Product = ({ product }) => {

  
  return (
    <div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
						<img src={product.image} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">
							<Link to={`/product/${product._id}`}>
                      {product.title}
							</Link>
						</h5>
						<span className="badge badge-dark mb-2">Price: {product.regular_price} $</span>
						<p className="card-text">
								{product.description}
						</p>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Product;

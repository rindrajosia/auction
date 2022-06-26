import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';
import CountDownTimer from "./CountDownTimer";

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)
  const date1 = new Date(product.bid_end_date); 
  const Diff_temps = date1.getTime() - new Date().getTime(); 
  const Diff_jours = Diff_temps / (1000 * 3600 * 24); 
  const DAYS_DIFF_IN_MS = Math.round(Diff_jours) * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + DAYS_DIFF_IN_MS;
  const [targetDate, setTargetDate] = useState(
    new Date(dateTimeAfterThreeDays)
  );
  return (
    <section className="bootcamp mt-5">
       <div className="container">
         <div className="row">
           <div className="col-md-8">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
           
            <p className="lead mb-4">Regular Price: <span className="text-primary">{product.regular_price} $</span></p>
			<p className="lead mb-4">Regular Price: <span className="text-primary">{product.start_bid}</span></p>
 
			</div>
           <div className="col-md-4">

				  <Image src={product.image} className="img-thumbnail" alt={product.name} fluid />

				 <h1 className="text-center my-4"><span className="badge badge-secondary badge-success rounded-circle p-3">8.8</span> Rating</h1>

				 <span className="btn btn-dark btn-block my-3">
						<CountDownTimer targetDate={targetDate} />
				 </span>
				 <a href="add-review.html" className="btn btn-light btn-block my-3"><i className="fas fa-pencil-alt"></i>  Write a Review</a>
				 <a href="#" target="_blank" className="btn btn-secondary btn-block my-3"><i className="fas fa-globe"></i>  Visit Website</a>


				 <ul className="list-group list-group-flush mt-4">
				   <li className="list-group-item"><i className="fas fa-check text-success"></i> Housing</li>
					<li className="list-group-item"><i className="fas fa-check text-danger"></i> Job Assistance</li>
					<li className="list-group-item"><i className="fas fa-times text-success"></i> Job Guarantee</li>
					<li className="list-group-item"><i className="fas fa-check text-success"></i> Accepts GI Bill</li>
				</ul>
			
			
          </div>
         </div>
       </div>
    </section>
  )
}

export default ProductScreen;

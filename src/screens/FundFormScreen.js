import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { addFund, listFund } from '../actions/fundActions';
import { Redirect } from 'react-router-dom';

const FundFormScreen = ({ location, history }) => {

	const [funds, setFund] = useState({
		amount_start: '', percentage: ''
	});
	
	const [dataFund, setDataFund] = useState();
	
	const userLogin = useSelector( (state) => state.userLogin);
	const { userInfo } = userLogin;
	
	const fundList = useSelector( (state) => state.fundList);
	
	useEffect(() => {
		dispatch(listFund(userInfo.id));
	}, [userInfo]);
	
	useEffect(() => {
		setDataFund(fundList.fund);
	}, [fundList.fund]);
	
	
	const handleChange = e => {
		const { name, value } = e.target;
		setFund({ ...funds, [name]: value });
	};
	
	const dispatch = useDispatch();
	
	const cFund = useSelector(state => state.createFund);

	const { loading, error, fund } = cFund;
	
	 
	
	const submitHandler = e => {
		e.preventDefault();
		dispatch(addFund(funds, history))
	}
 

  return (
		<section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Add Fund</h1>
								{error && <Message variant='danger'>{ error }</Message>}
								{loading && <Loader />}
								{fund && <Message variant='primary'>{ fund.message }</Message>}
								
								<form onSubmit={submitHandler}>
									<div className="form-group">
										<label>Fund amount</label>
										{!fundList.fund && (
											<input
												type="number"
												name="amount_start"
												className="form-control"
												placeholder="fund"
												value={funds.amount_start}
												onChange={handleChange}
												required
											/>
										)}
										
										{fundList.fund && (
											<input
												type="number"
												name="amount_start"
												className="form-control"
												placeholder="fund"
												value={fundList.fund.amount_start}
											/>
										)}
									</div>
									
									<div className="form-group">
										<label>Percentage notification</label>
										{!fundList.fund && (
											<input
											type="number"
											name="percentage"
											className="form-control"
											placeholder="Percentage"
											value={funds.percentage}
											onChange={handleChange}
											required
											/>
										)}
										
										{fundList.fund && (
											<input
												type="number"
												name="percentage"
												className="form-control"
												placeholder="percentage"
												value={fundList.fund.percentage}
											/>
										)}
										
									</div>
									
									{!fundList.fund && 
									(<Button 
										type='submit' 
										className="btn btn-primary btn-block" 
										variant='primary'
										>
									  Add Fund
									</Button>)}
									
								  </form>
								
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default FundFormScreen;
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userAction';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = location.search ? location.search.split('=')[1] : '/';

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if(userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
		<section className="form mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-6 m-auto">
						<div className="card bg-white p-4 mb-4">
							<div className="card-body">
								<h1><i className="fas fa-sign-in-alt"></i> Login</h1>
								{error && <Message variant='danger'>{ error }</Message>}
								{loading && <Loader />}

								<form onSubmit={submitHandler}>

									<Form.Group className="form-group" controlId='email'>
									  <Form.Label>Email Address</Form.Label>
									  <Form.Control
										required
										type='email'
										placeholder='Enter Email'
										value={email}
										className="form-control"
										onChange={(e) => setEmail(e.target.value)}>
									  </Form.Control>
									</Form.Group>


									<Form.Group className="form-group mb-4" controlId='password'>
									  <Form.Label>Password</Form.Label>
									  <Form.Control
										className="form-control"
										required
										type='password'
										placeholder='Enter password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}>
									  </Form.Control>
									</Form.Group>
									<Button type='submit' className="btn btn-primary btn-block" variant='primary'>
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

export default LoginScreen;

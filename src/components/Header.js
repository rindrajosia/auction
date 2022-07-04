import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userAction';
import Notification from './Notification';
const Header = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector( (state) => state.userLogin);
	const { userInfo } = userLogin;

	  const logoutHandler = () => {
		dispatch(logout());
	  }
	  return (
	  <>
		<nav className="navbar navbar-expand-md navbar-dark bg-primary">
			  <div className="container">
				<Link className="navbar-brand" to="/">
					<i className="fas fa-laptop-code"></i> Auction
				</Link>
				<button
				  className="navbar-toggler"
				  type="button"
				  data-toggle="collapse"
				  data-target="#navbarSupportedContent"
				>
				  <span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav ml-auto">

									{ userInfo ? (
										<li className="nav-item dropdown">
											<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
												<i className="fas fa-user" aria-hidden="true"></i> {userInfo.name}
											</Link>
											<div className="dropdown-menu">
												{userInfo.role_id === 1 && (
												<Link className="dropdown-item" to="/product" >Add Product</Link>
												)}
												{userInfo.role_id === 2 && (
												<Link className="dropdown-item" to="/fund" >Add Fund</Link>
												)}
												<div className="dropdown-divider"></div>
												<Link className="dropdown-item" to="#" onClick={logoutHandler}>
													<i className="fas fa-sign-out-alt" aria-hidden="true"></i> Logout</Link>
											</div>
										</li>
									) : (
										  <li className="nav-item">
											<Link className="nav-link" to="/login">
												Sign in
											</Link>
										</li>
									)}

								</ul>
				</div>

			  </div>

			</nav>
			{ userInfo && (
					<Notification userInfo = {userInfo}/>
				)}
		</>
	  )
}

export default Header

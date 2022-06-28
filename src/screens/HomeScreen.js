import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import SideBar from '../components/SideBar';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';


const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector(state => state.productList);
	const [item, setItem] = useState(10);
	const [offset, set0ffset] = useState(0);
	const { loading, filteredItems, products, error } = productList;
	const [paginate, setPaginate] = useState([]);
	const [page, setPage] = useState();

	
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch])
	
	useEffect(() => {
		
		setPaginate(filteredItems.slice(offset, item));
		setPage(Math.ceil(filteredItems.length/10));
		console.log(filteredItems.length);
	}, [filteredItems, products])
	
	
	useEffect(() => {
		setPaginate(filteredItems.slice(offset, item));
	}, [offset, item])
	
	const showPage = (end) => {
		if(end == 1){
			set0ffset(0);
			setItem(end * 10);
		}else {
			set0ffset((end * 10) - 10);
			setItem(end * 10);
		}
		
	}
	
  
  return (
		<section className="browse my-5">
		  <div className="container">
			<div className="row">
			  <SideBar />

			  <div className="col-md-8">
			  
				  {loading ? (
						<Loader />
					  ) : error ? (
						<Message variant='Danger'>{ error }</Message>
					  ) :(
						<>
						  {paginate.map(product =>(
							  <Product key={product.id} offset={offset} product={product} />
						  ))}
						</>
					  )}
					  
				  


				<nav aria-label="Page navigation example">
				  <ul className="pagination">
						  {
							[...Array(page).keys()].map(p => (
							  <li key={p + 1} className="page-item" onClick={(e)=>{showPage(p+1)}}><a className="page-link" href="#">{p + 1}</a></li>
							))
						}
						
					
				  </ul>
				</nav>
			  </div>
			</div>
		  </div>
		</section>

  )
}

export default HomeScreen;

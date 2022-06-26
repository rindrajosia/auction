import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import SideBar from '../components/SideBar';
import products from '../products';
import axios from 'axios';


const HomeScreen = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/product');
      setProducts(response.data);
    }
    fetchProducts
  }, []);
  
  return (
<section className="browse my-5">
  <div className="container">
    <div className="row">
      <SideBar />

      <div className="col-md-8">
      {products.map(product =>(
          <Product product={product} />
      ))}


        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>

  )
}

export default HomeScreen;

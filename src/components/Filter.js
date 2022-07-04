import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts, listProducts } from '../actions/productActions';
import { Button } from 'react-bootstrap';

const Filter = () => {
	const dispatch = useDispatch();
	const productList = useSelector(state => state.productList);

	const [filter, setFilter] = useState({
		title: '', description: ''
	});

	const handleChange = e => {
		const { name, value } = e.target;

		setFilter({ ...filter, [name]: value });

	};


	const submitHandler = e => {
		e.preventDefault();
		if(filter.title.trim() === '' && filter.description.trim() ===''){
			dispatch(listProducts());
		} else {
			dispatch(filterProducts(productList.filteredItems, filter.title, filter.description));
		}
	}
  return (
      <div className="card card-body mb-4">
        <h4 className="mb-3">By Title and Description</h4>
        <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Title"
				  value={filter.title}
				  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="description"
				  value={filter.description}
                  placeholder="Description"
				  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <Button
			type='submit'
			className="btn btn-primary btn-block"
			variant='primary'
			>
			Search
		</Button>
        </form>
      </div>


  )
}

export default Filter;

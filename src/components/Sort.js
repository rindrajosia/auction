import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProducts } from '../actions/productActions';

const Sort = () => {
	const dispatch = useDispatch();
	const sort = useSelector(state => state.productList.sort);
	const productList = useSelector(state => state.productList.filteredItems);

  return (
      <form>

        <div className="form-group">
          <label> Order by</label>
				  <select
		              className="custom-select mb-2"
		              value={sort}
		              onChange={(event) => {
		                dispatch(sortProducts(
		                  productList,
		                  event.target.value
		                ));
		              }}
		            >
					  <option value="">Select</option>
		              <option value="lowestprice">Lowest to highest</option>
		              <option value="highestprice">Highest to lowest</option>
					</select>
        </div>


      </form>


  )
}

export default Sort;

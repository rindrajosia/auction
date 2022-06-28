import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
const SideBar = () => {
  return (
    <div className="col-md-4">
      <Filter />

      <h4>Filter</h4>
      <Sort />
    </div>
  )
}

export default SideBar;

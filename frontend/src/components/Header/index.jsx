import React from 'react';
import filter from '../../assets/filter.svg'
import search from '../../assets/search.svg'


import './style.scss';

const Header = (props) => {
  return (
    <div className="header">
      <h1>What ingredients do you have on hand?</h1>
      <div className="search-bar-container">
        <input
          className="search-bar"
          onChange={props.setSearchValue}
          placeholder="Search Ingredients..."
          type="text"
        />
        <img alt="search" className="search" src={search}/>
      </div>
      <img alt="filter" className="filter" src={filter}/>
      <img
        alt="filter"
        className="filter"
        onClick={props.setModalVisible}
        src={filter}/>
    </div>
  )
}

export default Header;
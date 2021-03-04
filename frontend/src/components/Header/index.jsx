import React from 'react';
import {
  Link
} from "react-router-dom";
import back from '../../assets/back.svg'
import camera from '../../assets/camera.svg'
import search from '../../assets/search.svg'

import './style.scss';

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="back" className="back" src={back}/>
      </Link>
      <h1><span className="underline">Ingre</span>dients</h1>
      <h2 className="description">search by text or scan your ingredients!</h2>
      <div className="search-bar-container">
        <input
          className="search-bar"
          onChange={props.setSearchValue}
          placeholder="Search Ingredients..."
          type="text"
        />
        <img alt="search" className="search" src={search}/>
        <img
        alt="camera"
        className="camera"
        onClick={props.setModalVisible}
        src={camera}/>
      </div>
    </div>
  )
}

export default Header;
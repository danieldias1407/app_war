import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import Movie from '../components/movie/Movie';
import Routes from '../routes/routes';
import logo from '../../assets/img/logo/logo.png';


import './Main.css';


function Main() {
  return (
    <><div className="logo" ><img src= {logo}/></div>
      <Outlet /></>

  );
}

export default Main;

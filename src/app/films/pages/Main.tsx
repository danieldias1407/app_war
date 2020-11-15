import React from 'react';
import {Outlet } from 'react-router-dom';
import logo from '../../assets/img/logo/logo.png';


import './Main.css';


function Main() {
  return (
    <><p className="logo" ><img src= {logo}/></p>
      <Outlet /></>

  );
}

export default Main;

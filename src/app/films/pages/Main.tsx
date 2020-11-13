import React from 'react';
import { BrowserRouter as Router, Outlet } from 'react-router-dom';
import Movie from '../components/movie/Movie';
import Routes from '../routes/routes';



import './Main.css';


function Main() {
  return (
    <><h1>Star Wars</h1>
      <Outlet /></>

  );
}

export default Main;

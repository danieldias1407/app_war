import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './app/films/routes/routes';
import './App.css';

function App() {
  return (
    <Router>   
        <Routes />
    </Router> 
  );
}
export default App;

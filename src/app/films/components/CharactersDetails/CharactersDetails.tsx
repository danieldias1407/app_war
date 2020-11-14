import { Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
import api from '../../../services/api';

import './CharactersDetails.css';
import ICharactersDetails from './ICharactersDetails';


function CharactersDetails() {
    const state = JSON.stringify(useLocation().state);
    const peopleDetail: ICharactersDetails = JSON.parse(state);
  
    const [people, setPeople] = useState<ICharactersDetails>();

    useEffect(() => {
      setPeople(peopleDetail);
      
    }, [])
    const  navigate = useNavigate();
  return (
    <Container maxWidth="sm">
    <Typography component="div" style={{ backgroundColor: '#000000', height: '100vh' }} >
      <h1> {people?.name}</h1>

      <p><span>Hair Color:</span> {people?.hair_color}</p>
      <p><span>Height:</span> {people?.height}</p>
      <p><span>Mass:</span> {people?.mass}</p>
      <p><span>Hair Color</span> :{people?.hair_color}</p>
      <p><span>Skin Color</span> :{people?.skin_color}</p>
      <p><span>Eye Color</span> :{people?.eye_color}</p>
      <p><span>Bith Year:</span> {people?.bith_year}</p>
      <p><span>Gender:</span> {people?.gender}</p>
      <p><span>Eye Color:</span> {people?.eye_color}</p>
      <button onClick={() => navigate('/moviedetails',{state:people})}>Voltar</button> 

    </Typography>
  </Container>
  );
}

export default CharactersDetails;
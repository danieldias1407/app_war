import React from 'react';
import {useParams,useNavigate} from 'react-router-dom'
import './MovieDetails.css';

function MovieDetails() {
  const{id} = useParams();
  const  navigate = useNavigate();
  return (
      
      <><><h1>Movie Detais</h1>
      <p>Chegou o id:{id}</p></>
      <button onClick={() => navigate('/movie')}>Voltar</button></>
     
  );
}

export default MovieDetails;
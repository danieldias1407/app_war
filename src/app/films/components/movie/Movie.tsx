import React, { useEffect, useState} from 'react';
import './Movie.css';

import { Grid, Paper } from '@material-ui/core';
import api from '../../../services/api';
import img from '../../../assets/img/star_wars_3.jpg';
import IMovie from './IMovie';
import { useNavigate } from 'react-router-dom';

function Movie() {

    const [filmesList, setFilmesList] = useState<IMovie[]>([]);
    const  navigate = useNavigate();
        
    async function getFilmes() {
        await api.get('https://swapi.dev/api/films').then(response => {
            const data = response.data.results;
            setFilmesList(data);
        });
    }

    useEffect(() => {
        getFilmes();
      
    }, [])
    return (
     <Grid className="movie-container" container spacing={4} >
        {filmesList.map((movie, index) => (
           <Grid key={index} item xs={12} sm={6} md={4} className="grid-paper"> 
              <Paper className="movie-paper">
                 <a onClick={() => navigate('/moviedetails',{state:movie})}>
                     <img src= {img} />
                 </a>
                 <h1>{movie.title}</h1> 
                 <h3>Episodio: {movie.episode_id}</h3> 
                 <p>{movie.opening_crawl}</p>
              </Paper>     
           </Grid>
        ))}
     </Grid>
    );
  }

export default Movie;
import React, { useEffect, useState} from 'react';
import './Movie.css';


import { Grid, Paper } from '@material-ui/core';
import api from '../../../services/api';
import img1 from '../../../assets/img/star_wars_3.jpg';
import IMovie from './IMovie';
import { useNavigate } from 'react-router-dom';


function Movie() {

    const [filmesList, setFilmesList] = useState<IMovie[]>([]);
    const  navigate = useNavigate();
    
    async function getFilmes() {
        await api.get('').then(response => {
            const data = response.data.results;
            setFilmesList(data);
        });
    }

    useEffect(() => {
        getFilmes();
      
    }, [])

    return (
     <Grid className="movie-container" container spacing={4} >
        {filmesList.map(item => (
           <Grid item xs={12} sm={6} md={4} className="grid-paper"> 
              <Paper className="movie-paper">
             
                 <a  onClick={() => navigate('/moviedetails/5')}><img src= {img1} /></a> 
                 <h1>{item.title}</h1> 
                 <h3>Episodio: {item.episode_id}</h3> 
                 <p>{item.opening_crawl}</p>
              </Paper>
                 
           </Grid>
           
        ))}
         <div>{filmesList[0]?.title}</div>
     </Grid>
    );
  }



export default Movie;
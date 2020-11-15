import { Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';

import './SpeciesDetails.css';
import ISpeciesDetails from './ISpeciesDetails';


function SpeciesDetails() {
    const state = JSON.stringify(useLocation().state);
    const specieDetail: ISpeciesDetails = JSON.parse(state);
  
    const [species, setSpecies] = useState<ISpeciesDetails>();

    useEffect(() => {
      setSpecies(specieDetail);
      
    }, [])
    const  navigate = useNavigate();
  return (
    <Container maxWidth="sm">
    <Typography component="div" style={{ backgroundColor: '#000000', height: '100vh' }} >
      <h1> {species?.name}</h1>
      <span >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Classification:
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.classification}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Designation: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.designation}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Average Height: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.average_height}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Skin Colors: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.skin_colors}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Hair Colors
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.hair_colors}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Eye Color: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.eye_colors}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Average Lifespan 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.average_lifespan}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Language:
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {species?.language}
            </Button>
      </span>
    
      <button onClick={() => navigate('/moviedetails',{state: {
          species,
          key:true
        }})}>Voltar</button> 

    </Typography>
  </Container>
  );
}

export default SpeciesDetails;
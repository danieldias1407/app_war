import { Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';


import './PlanetsDetails.css';
import IPlanetsDetails from './IPlanetsDetails';


function PlanetsDetails() {
    const state = JSON.stringify(useLocation().state);
    const planetDetail: IPlanetsDetails = JSON.parse(state);
    
    const [planet, setPlanet] = useState<IPlanetsDetails>();
   
    useEffect(() => {
      setPlanet(planetDetail);
      
    }, [])
    const  navigate = useNavigate();
  return (
    <Container maxWidth="sm">
    <Typography component="div" style={{ backgroundColor: '#000000', height: '100vh' }} >
      <h1> {planet?.name}</h1>
      <span >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Rotation Period: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {planet?.rotation_period}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Orbital Period: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {planet?.orbital_period}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Population: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {planet?.population}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Surface Walter: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {planet?.surface_walter}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Climate: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {planet?.climate}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Terrain: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {planet?.terrain}
            </Button>
      </span>
    
      <button onClick={() => navigate('/moviedetails',{state: {
          planet,
          key:true
        }})}>Voltar</button> 

    </Typography>
  </Container>
  );
}

export default PlanetsDetails;
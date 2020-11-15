import { Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';

import './StarShipsDetails.css';
import IStarShipsDetails from './IStarShipsDetails';


function StarShipsDetails() {
    const state = JSON.stringify(useLocation().state);
    const starShipDetail: IStarShipsDetails = JSON.parse(state);
  
    const [starShip, setstarShip] = useState<IStarShipsDetails>();

    useEffect(() => {
        setstarShip(starShipDetail);
      
    }, [])
    const  navigate = useNavigate();
  return (
    <Container maxWidth="sm">
    <Typography component="div" style={{ backgroundColor: '#000000', height: '100vh' }} >
      <h1> {starShip?.name}</h1>
      <span >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Model:
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.model}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Manufacturer: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.manufacturer}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Const in Credits: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.cost_in_credits}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Lenght: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.length}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Max atmosphering speed:
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.max_atmosphering_speed}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Crew: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.crew}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Passengers: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.passengers}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Starship Class
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {starShip?.starship_class}
            </Button>
      </span>
    
      <button onClick={() => navigate('/moviedetails',{state: {
          starShip,
          key:true
        }})}>Voltar</button> 

    </Typography>
  </Container>
  );
}

export default StarShipsDetails;
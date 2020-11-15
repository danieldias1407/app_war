import { Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';

import './VehiclesDetails.css';
import IVehiclesDetails from './IVehiclesDetails';


function VehiclesDetails() {
    const state = JSON.stringify(useLocation().state);
    const vehicleDetail: IVehiclesDetails = JSON.parse(state);
  
    const [vehicle, setvehicle] = useState<IVehiclesDetails>();

    useEffect(() => {
        setvehicle(vehicleDetail);
      
    }, [])
    const  navigate = useNavigate();
  return (
    <Container maxWidth="sm">
    <Typography component="div" style={{ backgroundColor: '#000000', height: '100vh' }} >
      <h1> {vehicle?.name}</h1>
      <span >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Model:
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.model}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Manufacturer: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.manufacturer}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Const in Credits: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.cost_in_credits}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Lenght: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.length}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Max atmosphering speed:
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.max_atmosphering_speed}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Crew: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.crew}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Passengers: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.passengers}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Vehicle Class
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {vehicle?.vehicle_class}
            </Button>
      </span>
    
      <button onClick={() => navigate('/moviedetails',{state: {
          vehicle,
          key:true
        }})}>Voltar</button> 

    </Typography>
  </Container>
  );
}

export default VehiclesDetails;
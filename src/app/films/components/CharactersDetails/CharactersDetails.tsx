import { Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
      <span >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Hair Color: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {people?.hair_color}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Gender: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {people?.gender}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Height: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {people?.height}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
            Mass: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {people?.mass}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Skin Color: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {people?.skin_color}
            </Button>
      </span>
      <span  >
            <Button className="button-list-primary" variant="outlined" color="primary">
             Eye Color: 
            </Button>
      </span>
      <span  >
            <Button className="button-list-secondary" variant="outlined" color="secondary">
              {people?.eye_color}
            </Button>
      </span>
      <span className="span-back" >
            <Button className="button-list-back" variant="outlined" color="inherit"onClick={() => navigate('/movie')}>
              Back
            </Button>
      </span>
    </Typography>
  </Container>
  );
}

export default CharactersDetails;
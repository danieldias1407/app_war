import { Button, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import api from '../../../services/api';
import ICharactersDetails from '../CharactersDetails/ICharactersDetails';
import IMovieDetails from './IMoveDetails';
import IPlanetsDetails from '../PlanetsDetails/IPlanetsDetails';
import ISpeciesDetails from '../SpeciesDetails/ISpeciesDetails';
import IStarShipsDetails from '../StarShipsDetails/IStarShipsDetails';
import IVehiclesDetails from '../VehiclesDetails/IVehiclesDetails';
import './MovieDetails.css';

function MovieDetails() {

  const  navigate = useNavigate();
  const movieState =  useLocation().state;
  const movieStringDetails = JSON.stringify(movieState);
  const movieDetails :IMovieDetails = JSON.parse(movieStringDetails);

  let characteresList: ICharactersDetails[] = [] ;
  let planetsList: IPlanetsDetails[] = [] ;
  let speciesList: ISpeciesDetails[] = [] ;
  let vehiclesList: IVehiclesDetails[] = [] ;
  let starShipList: IStarShipsDetails[] = [] ;

  const [film, setFilm] = useState<IMovieDetails>();
  const [characteresState, setCharacteresState] = useState<ICharactersDetails[]>([]);
  const [planetsState, setPlanetsState] = useState<IPlanetsDetails[]>([]);
  const [speciesState, setSpeciesState] = useState<ISpeciesDetails[]>([]);
  const [vehiclesState, setVehiclesState] = useState<IVehiclesDetails[]>([]);
  const [starShipState, setStarShipState] = useState<IStarShipsDetails[]>([]);
 
  function savePeople() {
        film?.characters.map(pessoa => {
          getCharacters(pessoa);
        }) 
        setCharacteresState(characteresList);   
        console.log('charactState',characteresState)
  }

  async function getCharacters(url: string) {
    await api.get(url).then(response => {
        const data = response.data;
        characteresList.push(data);  
    }); 
     
  }

  function savePlanet() {
    film?.planets.map(planet => {
      getPlanets(planet);
    })        
}

async function getPlanets(url: string) {
await api.get(url).then(response => {
    const data = response.data;
    planetsList.push(data);  
}); 
setPlanetsState(planetsList); 
}

function saveSpecies() {
  film?.species.map(specie => {
    getSpecies(specie);
  })        
}

async function getSpecies(url: string) {
await api.get(url).then(response => {
  const data = response.data;
  speciesList.push(data);  
}); 
setSpeciesState(speciesList); 
}

function saveStarships() {
  film?.starships.map(starShip => {
    getStarships(starShip);
  })        
}

async function getStarships(url: string) {
await api.get(url).then(response => {
  const data = response.data;
  starShipList.push(data);  
}); 
setStarShipState(starShipList); 
}

function saveVehicles() {
  film?.vehicles.map(vehicle => {
    getVehicles(vehicle);
  })        
}

async function getVehicles(url: string) {
await api.get(url).then(response => {
  const data = response.data;
  vehiclesList.push(data);  
}); 
setVehiclesState(vehiclesList); 
}

  function navigatePageCharacter(characteresState:ICharactersDetails) {
      navigate('/characters',{state:characteresState});
  }
  function navigatePagePlanet(planetState:IPlanetsDetails) { 
    navigate('/planet',{state:planetState});
  }
  function navigatePageVehicles(vehiclesState:IVehiclesDetails) {
    navigate('/vehicles',{state:vehiclesState});
  }
  function navigatePageSpecies(speciesState:ISpeciesDetails) {
    navigate('/species',{state:speciesState});
  }
  function navigatePageStarShips(starShipState:IStarShipsDetails) {
    navigate('/species',{state:starShipState});
  }

  useEffect(() => {
      setFilm(movieDetails); 
  }, [])


 
  return (

      
    <Container maxWidth="sm">
      <Typography component="div"  >
        <h1>Movie Detais</h1>
        <p><span>Title:</span> {film?.title}</p>
        <p><span>Descrition: </span>  {film?.opening_crawl}</p>
        <p><span>Director: </span>  {film?.director}</p>
        <p><span>Producer: </span>  {film?.producer}</p>
       
        <p >
          <Button variant="outlined" color="secondary" onClick={savePeople}>
            Characters
          </Button> 
        </p>
           {characteresState.map((namePeople, index) => (
             <span key={index} className="button-list" >
                <Button  variant="contained" color="primary" onClick={() => {navigatePageCharacter(namePeople)}}>
                   {namePeople?.name}
                </Button> 
             </span>
         ))}
         
        <p >
          <Button variant="contained" color="secondary" onClick={() => {savePlanet()}}>
           Planets
          </Button> 
        </p>
        {planetsState.map((namePlanet, index) => (
             <span className="button-list" >
                <Button key={index} variant="contained" color="primary" onClick={() => {navigatePagePlanet(namePlanet)}}>
                   {namePlanet?.name}
                </Button> 
             </span>
         ))}

        <p >
          <Button variant="contained" color="secondary" onClick={() => {saveStarships()}}>
          Starships
          </Button> 
        </p>
        {starShipState.map((nameStarShip, index) => (
             <span className="button-list" >
                <Button key={index} variant="contained" color="primary" onClick={() => {navigatePageStarShips(nameStarShip)}}>
                   {nameStarShip?.name}
                </Button> 
             </span>
         ))}

        <p >
          <Button variant="contained" color="secondary" onClick={() => {saveVehicles()}}>
           Vehicles
          </Button> 
        </p>
        {vehiclesState.map((nameVehicle, index) => (
             <span className="button-list" >
                <Button key={index} variant="contained" color="primary" onClick={() => {navigatePageVehicles(nameVehicle)}}>
                   {nameVehicle?.name}
                </Button> 
             </span>
         ))}

        <p >
          <Button variant="contained" color="secondary" onClick={() => {saveVehicles()}}>
          Species
          </Button> 
        </p>
        {speciesState.map((nameSpecie, index) => (
             <span className="button-list" >
                <Button key={index} variant="contained" color="primary" onClick={() => {navigatePageSpecies(nameSpecie)}}>
                   {nameSpecie?.name}
                </Button> 
             </span>
         ))}
        
        <button onClick={() => navigate('/movie')}>Voltar</button> 
      </Typography>
    </Container>
     
  );
}

export default MovieDetails;
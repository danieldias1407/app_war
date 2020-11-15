import { Button, Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import api from '../../../services/api';
import ICharactersDetails from '../CharactersDetails/ICharactersDetails';
import IMovieDetails from './IMoveDetails';
import IPlanetsDetails from '../PlanetsDetails/IPlanetsDetails';
import ISpeciesDetails from '../SpeciesDetails/ISpeciesDetails';
import IStarShipsDetails from '../StarShipsDetails/IStarShipsDetails';
import IVehiclesDetails from '../VehiclesDetails/IVehiclesDetails';
import axios from 'axios';
import './MovieDetails.css';

function MovieDetails() {

  const navigate = useNavigate();
  const movieState = useLocation().state;
  const movieStringDetails = JSON.stringify(movieState);
  const movieDetails: IMovieDetails = JSON.parse(movieStringDetails);

  const [film, setFilm] = useState<IMovieDetails>({} as IMovieDetails);
  const [characteresState, setCharacteresState] = useState<ICharactersDetails[]>([]);
  const [planetsState, setPlanetsState] = useState<IPlanetsDetails[]>([]);
  const [speciesState, setSpeciesState] = useState<ISpeciesDetails[]>([]);
  const [vehiclesState, setVehiclesState] = useState<IVehiclesDetails[]>([]);
  const [starShipState, setStarShipState] = useState<IStarShipsDetails[]>([]);

  function savePeople() {
    const charactersProsmise = film.characters.map(pessoa => {
      return api.get(pessoa)
    })
    charactersProsmise &&
      axios.all(charactersProsmise).then(response => {
        const charcterList =  response.map(characters => {
          return characters.data;
        }) 
        setCharacteresState(charcterList)
      })
  }

  function savePlanet() {
    const planetProsmise = film.planets?.map(planet => {
      return api.get(planet)

    })
    planetProsmise &&
      axios.all(planetProsmise).then(response => {
        const planetList =  response.map(planet => {
          return planet.data;
        }) 
        setPlanetsState(planetList)
      })
  }


  function saveSpecies() {
    const speciesProsmise = film.species.map(species => {
      return api.get(species)

    })
    speciesProsmise &&
      axios.all(speciesProsmise).then(response => {
        const speciesList =  response.map(specie => {
          return specie.data;
        }) 
        setSpeciesState(speciesList)
      })
  }

  function saveStarships() {
    const starShipsProsmise = film.starships.map(starShip => {
      return api.get(starShip)

    })
    starShipsProsmise &&
      axios.all(starShipsProsmise).then(response => {
        const starShipList =  response.map(starShip => {
          return starShip.data;
        }) 
        setStarShipState(starShipList)
        console.log("naves",starShipsProsmise)
      })
  }

  function saveVehicles() {
    const vehichesProsmise = film.vehicles.map(vehiches => {
      return api.get(vehiches)
    })
    vehichesProsmise &&
      axios.all(vehichesProsmise).then(response => {
        const vehichesList =  response.map(vehiches => {
          return vehiches.data;
        }) 
        setVehiclesState(vehichesList)
      })
  }

  function navigatePageCharacter(characteresState: ICharactersDetails) {
    navigate('/characters', { state: characteresState });
  }
  function navigatePagePlanet(planetState: IPlanetsDetails) {
    navigate('/planet', { state: planetState });
  }
  function navigatePageVehicles(vehiclesState: IVehiclesDetails) {
    navigate('/vehicles', { state: vehiclesState });
  }
  function navigatePageSpecies(speciesState: ISpeciesDetails) {
    navigate('/species', { state: speciesState });
  }
  function navigatePageStarShips(starShipState: IStarShipsDetails) {
    navigate('/starships', { state: starShipState });
  }

  useEffect(() => {
    setFilm(movieDetails);
  }, [])

  return (


    <Grid container className="grid-container" spacing={2}>

      <Paper className="paper-container" >
        <h1>Movie Detais</h1>
        <Grid item xs={12} ><span >Title:</span> <span className="filter-span">{film?.title}</span></Grid>
        <Grid item xs={12}><span>Descrition: </span> <span className="filter-span">{film?.opening_crawl}</span></Grid>
        <Grid item xs={12}><span>Director: </span>  <span className="filter-span">{film?.director}</span></Grid>
        <Grid item xs={12}><span>Producer: </span>  <span className="filter-span">{film?.producer}</span></Grid>

        <Grid item xs={12}>
          <Button className="filter-button" variant="outlined" color="primary" onClick={savePeople}>
            Characters
          </Button>
        </Grid >
        <Grid item xs={12}>
          {characteresState.map((namePeople, index) => (
            <span key={index} className="button-list" >
              <Button className="filter-button-child" variant="outlined" color="secondary" onClick={() => { navigatePageCharacter(namePeople) }}>
                {namePeople?.name}
              </Button>
            </span>
          ))}
        </Grid>
        <Grid >
          <Button className="filter-button" variant="outlined" color="primary" onClick={savePlanet}>
            Planets
          </Button>
        </Grid>
        {planetsState.map((namePlanet, index) => (
          <span key={index} className="button-list" >
            <Button  variant="outlined" color="secondary" onClick={() => { navigatePagePlanet(namePlanet) }}>
              {namePlanet?.name}
            </Button>
          </span>
        ))}

        <Grid >
          <Button className="filter-button" variant="outlined" color="primary" onClick={saveStarships}>
            Starships
          </Button>
        </Grid>
        {starShipState.map((nameStarShip, index) => (
          <span  key={index}  className="button-list" >
            <Button variant="outlined" color="secondary" onClick={() => { navigatePageStarShips(nameStarShip) }}>
              {nameStarShip?.name}
            </Button>
          </span>
        ))}

        <Grid >
          <Button className="filter-button" variant="outlined" color="primary" onClick={saveVehicles}>
            Vehicles
          </Button>
        </Grid>
        {vehiclesState.map((nameVehicle, index) => (
          <span key={index} className="button-list" >
            <Button   variant="outlined" color="secondary" onClick={() => { navigatePageVehicles(nameVehicle) }}>
              {nameVehicle?.name}
            </Button>
          </span>
        ))}

        <Grid >
          <Button className="filter-button" variant="outlined" color="primary" onClick={saveSpecies}>
            Species
          </Button>
        </Grid>
        {speciesState.map((nameSpecie, index) => (
          <span key={index} className="button-list" >
            <Button   variant="outlined" color="secondary" onClick={() => { navigatePageSpecies(nameSpecie) }}>
              {nameSpecie?.name}
            </Button>
          </span>
        ))}

        <button onClick={() => navigate('/movie')}>Voltar</button>
      </Paper>
    </Grid>

  );
}

export default MovieDetails;
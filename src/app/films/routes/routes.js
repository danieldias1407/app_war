import React from 'react';
import { Routes, Route} from "react-router-dom";
import Movie from '../components/movie/Movie';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import CharactersDetails from '../components/CharactersDetails/CharactersDetails';
import PlanetsDetails from '../components/PlanetsDetails/PlanetsDetails';
import SpeciesDetails from '../components/SpeciesDetails/SpeciesDetails';
import StarShipsDetails from '../components/StarShipsDetails/StarShipsDetails';
import VehiclesDetails from '../components/VehiclesDetails/VehiclesDetails';
import Animation from '../components/Animation/Animation';
import Main from '../pages/Main';


export default function MaintRoutes() {
    return (
   
        <Routes>
            <Route path="/" element={<Main/>}> 
                <Route path="/movie" element={<Movie/>} />
                <Route path="/moviedetails" element={<MovieDetails/>} />
                <Route path="/characters" element={<CharactersDetails/>} />
                <Route path="/vehicles" element={<VehiclesDetails/>} />
                <Route path="/starships" element={<StarShipsDetails/>} />
                <Route path="/species" element={<SpeciesDetails/>} />
                <Route path="/planet" element={<PlanetsDetails/>} />
                <Route path="/" element={<Animation/>}/>
            </Route>
            

            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
    )
}
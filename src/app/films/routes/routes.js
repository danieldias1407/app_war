import React from 'react';
import { Routes, Route} from "react-router-dom";
import Movie from '../components/movie/Movie';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import CharactersDetails from '../components/CharactersDetails/CharactersDetails';
import Main from '../pages/Main';


export default function MaintRoutes() {
    return (
   
        <Routes>
            <Route path="/" element={<Main/>}> 
                <Route path="/movie" element={<Movie/>} />
                <Route path="/moviedetails" element={<MovieDetails/>} />
                <Route path="/characters" element={<CharactersDetails/>} />
                <Route path="/vehicles" element={<CharactersDetails/>} />
                <Route path="/starships" element={<CharactersDetails/>} />
                <Route path="/species" element={<CharactersDetails/>} />
                <Route path="/planet" element={<CharactersDetails/>} />
            </Route>
            

            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
    )
}
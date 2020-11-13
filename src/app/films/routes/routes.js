import React from 'react';
import { Routes, Route} from "react-router-dom";
import Movie from '../components/movie/Movie';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import Main from '../pages/Main';


export default function MaintRoutes() {
    return (
   
        <Routes>
            <Route path="/" element={<Main/>}> 
                <Route path="/movie" element={<Movie/>} />
                <Route path="/moviedetails/:id" element={<MovieDetails/>} />
            </Route>
            

            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
    )
}
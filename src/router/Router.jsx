import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Homepage from '../pages/Homepage/Homepage';
import Movies from '../pages/Movies/Movies';
import MovieDetail from '../pages/MovieDetail/MovieDetail';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetail />} />
      </Route>
    </Routes>
  );
}

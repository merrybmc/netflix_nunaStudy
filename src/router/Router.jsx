import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Homepage from '../pages/Homepage/Homepage';
import Movies from '../pages/Movies/Movies';
import MovieDetail from '../pages/MovieDetail/MovieDetail';
import NotFound from '../pages/NotFound/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path='movies'>
          <Route index element={<Movies />} />
          <Route path=':id' element={<MovieDetail />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

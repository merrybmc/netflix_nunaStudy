import React from 'react';
import Banner from '../../components/Banner';
import PopularMovieSlide from '../../components/PopularMovieSlide/PopularMovieSlide';
import * as S from './Homepage.styled.js';
export default function Homepage() {
  return (
    <S.Container>
      <Banner />
      <PopularMovieSlide />
    </S.Container>
  );
}

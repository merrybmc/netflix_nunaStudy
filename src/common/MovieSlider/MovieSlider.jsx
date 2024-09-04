import React from 'react';
import * as S from './MovieSlider.styled';
import MovieCard from '../MovieCard/MovieCard';
import { responsive } from '../../constants/responsive';

export default function MovieSlider({ title, movies }) {
  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.CarouselContainer
        infinite={true}
        itemClass='movie-slider p-1'
        draggable={true}
        centerMode={false}
        responsive={responsive}
      >
        {/* <S.MovieBoxContainer> */}
        {movies?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
        {/* </S.MovieBoxContainer> */}
      </S.CarouselContainer>
    </S.Container>
  );
}

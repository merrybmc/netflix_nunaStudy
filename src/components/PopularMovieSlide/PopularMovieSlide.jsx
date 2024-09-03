import React, { useEffect } from 'react';
import {
  usePopularMoviesQuery,
  useTopRatedMoviesQuery,
  useUpComingMoviesQuery,
} from '../../hooks/useGetMovies';
import MovieSlider from '../../common/MovieSlider/MovieSlider';
import * as S from './PopularMovieSlide.styled';

export default function PopularMovieSlide() {
  const { data: popularMovies } = usePopularMoviesQuery();
  const { data: topRatedMovies } = useTopRatedMoviesQuery();
  const { data: upComingMovies } = useUpComingMoviesQuery();

  useEffect(() => {
    if (topRatedMovies) console.log(topRatedMovies);
  }, [topRatedMovies]);

  return (
    <S.MovieSliderContainer>
      <MovieSlider title='Popular Movies' movies={popularMovies?.results} />
      <MovieSlider title='Top Rated Movies' movies={topRatedMovies?.results} />
      <MovieSlider title='Up Coming Movies' movies={upComingMovies?.results} />
    </S.MovieSliderContainer>
  );
}

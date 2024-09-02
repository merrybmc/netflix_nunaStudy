import React, { useEffect } from 'react';
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import MovieCard from '../MovieCard';
import * as S from './PopularMovieSlide.styled';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function PopularMovieSlide() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }
  return (
    <S.Container>
      <S.Title>Popular Movies</S.Title>
      <S.CarouselContainer
        infinite={true}
        itemClass='movie-slider p-1'
        draggable={true}
        centerMode={false}
        responsive={responsive}
      >
        {data?.results?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </S.CarouselContainer>
    </S.Container>
  );
}

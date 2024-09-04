import React, { useEffect } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import * as S from './Movies.styled';

export default function Movies() {
  const [query] = useSearchParams();
  const keyword = query.get('q');
  const { data } = useSearchMovieQuery({ keyword });

  return (
    <S.RowContainer>
      <S.FilterContainer>
        <p>Filter</p>
      </S.FilterContainer>
      <S.MovieContainer>
        {data?.results.map((movie, index) => {
          return <MovieCard movie={movie} />;
        })}
      </S.MovieContainer>
    </S.RowContainer>
  );
}

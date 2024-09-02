import React, { useEffect } from 'react';
import { usePopularMoviesQuery } from '../hooks/usePopularMovies';
import * as S from './Banner.styled';

export default function Banner() {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (isError) {
    <h1>page error</h1>;
  }

  return (
    <S.BannerContainer>
      <S.BannerText>
        <S.BannerTitle>{data?.results[0].title}</S.BannerTitle>
        <p>{data?.results[0].overview}</p>
      </S.BannerText>
      <S.BannerBgImage posterPath={data?.results[0].poster_path}></S.BannerBgImage>
    </S.BannerContainer>
  );
}

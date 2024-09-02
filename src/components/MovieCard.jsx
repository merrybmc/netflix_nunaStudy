import React from 'react';
import * as S from './MovieCard.styled';

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div>
      <S.Test>123123</S.Test>
      <p>asdfasfd</p>
      <S.MovieBox posterPath={movie?.poster_path}>{movie.title}</S.MovieBox>
      <S.Overlay>
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id, index) => (
          <div key={index}>{id}</div>
        ))}
        <div>
          <div>{movie.vote_average}</div>
          <div>{movie.popularity}</div>
          <div>{movie.adult ? 'over18' : 'under18'}</div>
        </div>
      </S.Overlay>
    </div>
  );
}

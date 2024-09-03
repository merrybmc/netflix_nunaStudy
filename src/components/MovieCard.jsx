import React from 'react';
import * as S from './MovieCard.styled';

const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div>
      <S.MovieBox posterPath={movie?.poster_path}>
        {movie.title}
        <S.Overlay>
          <S.Title>{movie.title}</S.Title>
          <S.GenreBox>
            {movie.genre_ids.map((id, index) => (
              <S.Genre key={index}>{genreMap[id]}</S.Genre>
            ))}
          </S.GenreBox>
          <div>
            <div>✨ Rating: {movie.vote_average}</div>
            <div>🎉 Popularity: {movie.popularity}</div>
            <div>▶️ grade : {movie.adult ? 'over18' : 'under18'}</div>
          </div>
        </S.Overlay>
      </S.MovieBox>
    </div>
  );
}

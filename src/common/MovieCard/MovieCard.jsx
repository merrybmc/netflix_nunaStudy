import React, { useEffect } from 'react';
import * as S from './MovieCard.styled';
// import { genreMap } from '../../constants/genreMap';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

  const showGenre = (genreIdlist) => {
    if (!genreData) return [];

    const genreNameList = genreIdlist.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  const onMoveMovieDetail = () => {
    navigate(`/movies/${movie.id}`);
    console.log(1234);
  };

  return (
    <div>
      <S.MovieBox onClick={onMoveMovieDetail} posterPath={movie?.poster_path}>
        <S.Title>{movie.title}</S.Title>
        <S.Overlay>
          <S.StrongTitle>{movie?.title}</S.StrongTitle>
          <S.GenreBox>
            {showGenre(movie?.genre_ids).map((genre, index) => (
              <S.Genre key={index}>{genre}</S.Genre>
            ))}
          </S.GenreBox>
          <div>
            <div>✨ Rating: {movie?.vote_average}</div>
            <div>🎉 Popularity: {movie?.popularity}</div>
            <div>▶️ grade : {movie?.adult ? 'over18' : 'under18'}</div>
          </div>
        </S.Overlay>
      </S.MovieBox>
    </div>
  );
}

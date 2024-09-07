import React, { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import * as S from './MovieDetail.styled';
import { useParams } from 'react-router-dom';
import { useDetailMovieQuery, useMovieReviewsQuery } from '../../hooks/useGetMovies';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

export default function MovieDetail() {
  const { id } = useParams();
  const [modalState, setModalState] = useState(false);
  const [expandedReviewIndex, setExpandedReviewIndex] = useState(null); // 더보기 상태를 위한 상태값 추가

  const { data: genreData } = useMovieGenreQuery();
  const { data: detailMovieData } = useDetailMovieQuery({ id });
  const { data: movieReviewData } = useMovieReviewsQuery({ id });

  const showGenre = (genreIdlist) => {
    if (!genreData) return [];

    const genreNameList = genreIdlist?.map((list) => {
      const genreObj = genreData?.find((genre) => genre.id === list.id);
      return genreObj?.name;
    });

    return genreNameList;
  };

  const onModal = () => {
    setModalState(true);
  };

  const onCloseModal = () => {
    setModalState(false);
  };

  const toggleReviewExpand = (index) => {
    setExpandedReviewIndex(expandedReviewIndex === index ? null : index);
  };

  return (
    <S.MovieDetailContainer>
      <S.MovieBox>
        <S.MovieImage
          src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${detailMovieData?.poster_path}`}
        />

        <S.MovieDescription>
          <S.Title>
            <p>{detailMovieData?.title}</p>
            <S.Adult>{detailMovieData?.adult ? 'over18' : 'under18'}</S.Adult>
          </S.Title>

          <S.GenreBox>
            {showGenre(detailMovieData?.genres)?.map((genre, index) => (
              <S.Genre key={index}>{genre}</S.Genre>
            ))}
          </S.GenreBox>
          <S.PreviewButton onClick={onModal}>Preview</S.PreviewButton>
          <div>release : {detailMovieData?.release_date}</div>
          <div>✨ Rating: {detailMovieData?.vote_average}</div>
          <div>🎉 Popularity: {detailMovieData?.popularity}</div>
          <div>overview : {detailMovieData?.overview}</div>
        </S.MovieDescription>
      </S.MovieBox>

      <S.MovieReviewContainer>
        <S.MovieReviewTitle>Review</S.MovieReviewTitle>
        {movieReviewData?.results?.map((review, index) => (
          <S.MovieReviewBox key={index}>
            <S.MovieReviewAuthor>{review.author}</S.MovieReviewAuthor>
            <S.ContentBox>
              <S.MovieReviewContent expanded={expandedReviewIndex === index}>
                {review.content}
              </S.MovieReviewContent>
              <S.ToggleButton onClick={() => toggleReviewExpand(index)}>
                {expandedReviewIndex === index ? 'Close' : 'More'}
              </S.ToggleButton>
            </S.ContentBox>
          </S.MovieReviewBox>
        ))}
      </S.MovieReviewContainer>
      {modalState && <Modal onCloseModal={onCloseModal} />}
    </S.MovieDetailContainer>
  );
}

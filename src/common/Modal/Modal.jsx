import React from 'react';
import * as S from './Modal.styled';
import { useMovieVideoQuery } from '../../hooks/useGetMovies';
import { useParams } from 'react-router-dom';

export default function Modal({ onCloseModal }) {
  const { id } = useParams();
  const { data } = useMovieVideoQuery({ id });
  console.log(data);

  const handleOnCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <S.Overlay onClick={handleOnCloseModal}>
      <S.ModalContainer>
        <S.MovieIframe src={`https://www.youtube.com/embed/${data?.results[0].key}`} />
      </S.ModalContainer>
    </S.Overlay>
  );
}

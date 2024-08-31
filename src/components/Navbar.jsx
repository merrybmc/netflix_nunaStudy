import React from 'react';
import * as S from './Navbar.styled';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const onMovePage = (path) => {
    navigate(path);
  };
  return (
    <S.Container>
      <S.Title
        onClick={() => {
          onMovePage('/');
        }}
      >
        Minflix
      </S.Title>
      <S.MenuBox>
        <S.Menu
          onClick={() => {
            onMovePage('/');
          }}
        >
          Home
        </S.Menu>
        <S.Menu
          onClick={() => {
            onMovePage('/movies');
          }}
        >
          Link
        </S.Menu>
      </S.MenuBox>
      <S.SearchBox>
        <S.SearchInput />
        <S.SearchButton>Search</S.SearchButton>
      </S.SearchBox>
    </S.Container>
  );
}

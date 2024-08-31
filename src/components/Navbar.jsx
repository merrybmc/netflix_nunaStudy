import React from 'react';
import * as S from './Navbar.styled';

export default function Navbar() {
  return (
    <S.Container>
      <S.Title>Minflix</S.Title>
      <S.MenuBox>
        <S.Menu>Home</S.Menu>
        <S.Menu>Link</S.Menu>
      </S.MenuBox>
      <S.SearchBox>
        <S.SearchInput />
        <S.SearchButton>Search</S.SearchButton>
      </S.SearchBox>
    </S.Container>
  );
}

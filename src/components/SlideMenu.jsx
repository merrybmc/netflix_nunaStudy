import React from 'react';
import * as S from './SlideMenu.styled';

export default function SlideMenu({ onMovePage, onCloseSlide }) {
  return (
    <>
      <S.Overlay onClick={onCloseSlide}>
        <S.SlideBar>
          <S.CloseButton onClick={onCloseSlide} />
          <S.MenuTitle>Menu</S.MenuTitle>
          <S.Menu
            onClick={() => {
              onMovePage('/movies');
            }}
          >
            Movies
          </S.Menu>
        </S.SlideBar>
      </S.Overlay>
    </>
  );
}

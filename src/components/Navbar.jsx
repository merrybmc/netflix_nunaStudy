import React, { useEffect, useState } from 'react';
import * as S from './Navbar.styled';
import { useNavigate } from 'react-router-dom';
import SlideMenu from './SlideMenu';

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slideState, setSlideState] = useState(false);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchMove = (e) => {
    navigate(`/movies?q=${keyword}`);
  };

  const handleKeyDownMove = (e) => {
    if (e.key === 'Enter') {
      navigate(`/movies?q=${keyword}`);
    }
  };

  const onMovePage = (path) => {
    navigate(path);
    setSlideState(false);
  };

  const onOpenSlide = () => {
    setSlideState(true);
  };

  const onCloseSlide = () => {
    setSlideState(false);
  };

  if (isMobile) {
    return (
      <S.Container>
        <S.Title
          onClick={() => {
            onMovePage('/');
          }}
        >
          Minflix
        </S.Title>
        <S.MobileMenu onClick={onOpenSlide} />
        {slideState && <SlideMenu onMovePage={onMovePage} onCloseSlide={onCloseSlide} />}
      </S.Container>
    );
  }

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
          Movies
        </S.Menu>
      </S.MenuBox>
      <S.SearchBox>
        <S.SearchInput
          type='text'
          value={keyword}
          onChange={(e) => onChangeKeyword(e)}
          onKeyDown={(e) => handleKeyDownMove(e)}
        />
        <S.SearchButton onClick={onSearchMove}>Search</S.SearchButton>
      </S.SearchBox>
    </S.Container>
  );
}

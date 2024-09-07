import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'; // 장르 데이터 가져오기
import * as S from './Movies.styled';

export default function Movies() {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState('none');
  const [selectedGenre, setSelectedGenre] = useState('all'); // 장르 필터링 상태 추가
  const keyword = query.get('q');
  const { data } = useSearchMovieQuery({ keyword, page });
  const { data: genreData } = useMovieGenreQuery(); // 장르 데이터 가져오기

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filterMoviesByGenre = (movies) => {
    if (selectedGenre === 'all') return movies;
    return movies.filter((movie) => movie.genre_ids.includes(parseInt(selectedGenre)));
  };

  const sortMovies = (movies) => {
    if (!movies) return [];
    return movies.slice().sort((a, b) => {
      if (sortOption === 'popularity') {
        return b.popularity - a.popularity;
      } else if (sortOption === 'vote') {
        return b.vote_average - a.vote_average;
      } else {
        return 0;
      }
    });
  };

  const processedMovies = sortMovies(filterMoviesByGenre(data?.results));

  if (data?.total_results === 0) {
    return <S.NoResult>검색 결과가 없습니다.</S.NoResult>;
  }

  return (
    <S.RowContainer>
      <S.FilterContainer>
        <S.FilterTitle>Genre Filters</S.FilterTitle>

        <S.SelectGenreOption onChange={handleGenreChange} value={selectedGenre}>
          <option value='all'>All Genres</option>
          {genreData?.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </S.SelectGenreOption>

        <S.FilterTitle>Popular Filters</S.FilterTitle>
        <S.SelectSortOption onChange={handleSortChange} value={sortOption}>
          <option value='none'>None</option>
          <option value='vote'>Vote</option>
          <option value='popularity'>Popularity</option>
        </S.SelectSortOption>
      </S.FilterContainer>

      <S.MovieContainer>
        <S.MovieBox>
          {processedMovies?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </S.MovieBox>
        <S.PaginateContainer
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={data?.total_pages}
          previousLabel='<'
          breakLabel='...'
          renderOnZeroPageCount={null}
          forcePage={page - 1}
          pageClassName='page-item'
          previousClassName='page-item'
          nextClassName='page-item'
          activeClassName='active'
        />
      </S.MovieContainer>
    </S.RowContainer>
  );
}

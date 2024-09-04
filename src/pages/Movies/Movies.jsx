import React, { useEffect, useState } from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';
import * as S from './Movies.styled';

export default function Movies() {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data } = useSearchMovieQuery({ keyword, page });

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <S.RowContainer>
      <S.FilterContainer>
        <S.FilterTitle>Filter</S.FilterTitle>
        <p>in progress</p>
      </S.FilterContainer>
      <S.MovieContainer>
        <S.MovieBox>
          {data?.results.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
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

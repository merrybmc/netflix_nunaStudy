import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const FilterContainer = styled.div`
  width: 300px;
  color: white;
`;

export const FilterTitle = styled.h2`
  font-size: 36px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;
`;

export const MovieBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
`;

export const PaginateContainer = styled(ReactPaginate)`
  color: white;
  display: flex;
  justify-content: center;
  padding: 24px;
  gap: 8px;

  .page-item {
    font-size: 40px;
    cursor: pointer;

    &:hover {
      color: violet;
    }
  }

  .active {
    color: yellow;
  }
`;

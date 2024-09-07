import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  color: white;
`;

export const FilterTitle = styled.h2`
  font-size: 36px;
  padding-bottom: 20px;
`;

export const NoResult = styled.div`
  color: white;
  text-align: center;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 60px;
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

export const SelectSortOption = styled.select`
  background-color: #5a123d;
  color: white;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;

  option {
    color: white;
    background-color: #5a123d;
  }
`;

export const SelectGenreOption = styled.select`
  color: white;
  background-color: #5a123d;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 10px;

  option {
    color: white;
    background-color: #5a123d;
  }
`;

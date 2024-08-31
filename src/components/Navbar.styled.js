import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: beige;
  padding: 24px 18px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 20px;
`;

export const Menu = styled.button``;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

export const SearchInput = styled.input``;

export const SearchButton = styled.button`
  padding: 8px 12px;
  border: 1px solid gray;
  border-radius: 8px;
`;

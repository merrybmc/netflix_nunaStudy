import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  padding: 24px 18px;
`;

export const MobileMenu = styled(GiHamburgerMenu)`
  color: white;
  margin-left: auto;

  cursor: pointer;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  color: red;

  cursor: pointer;
`;

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 20px;
`;

export const Menu = styled.button`
  color: white;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
`;

export const SearchInput = styled.input`
  outline: none;
  padding: 4px;
`;

export const SearchButton = styled.button`
  padding: 8px 12px;
  border: 1px solid gray;
  border-radius: 8px;
  color: white;
`;

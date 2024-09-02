import styled from 'styled-components';

export const Test = styled.div`
  width: 100px;
  height: 100px;
  color: blue;
  background-color: beige;
`;

export const MovieBox = styled.div`
  position: relative;
  height: 330px;
  background-size: cover;
  background-image: ${({ posterPath }) =>
    `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${posterPath})`};
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.3) translateZ(20px);
    z-index: 2;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(43, 41, 41, 0.9);
  opacity: 0;
  transition: all 1s;
  color: white;
  font-weight: bold;
  overflow-wrap: break-word;

  &:hover {
    opacity: 1;
  }
`;

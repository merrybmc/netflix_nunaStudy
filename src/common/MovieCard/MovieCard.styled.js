import styled from 'styled-components';

export const MovieBox = styled.div`
  position: relative;
  width: 220px;
  height: 330px;
  padding: 24px;
  background-size: cover;
  background-image: ${({ posterPath }) =>
    `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${posterPath})`};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.01) translateZ(20px);
    z-index: 2;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  padding: 24px;
  top: 0;
  left: 0;
  width: 83%;
  height: 87.5%;
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

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
`;

export const StrongTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

export const GenreBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Genre = styled.div`
  border: 1px solid white;
  background-color: white;
  color: black;
  opacity: 0.7;
  padding: 4px;
  border-radius: 4px;
`;

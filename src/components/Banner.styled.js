import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
`;

export const BannerBgImage = styled.div`
  width: 100vw;
  height: 56vh;
  background-image: ${({ posterPath }) =>
    `url(https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${posterPath})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    left: 0;
    height: 56vh;
    width: 100%;
  }
`;

export const BannerText = styled.div`
  position: absolute;
  z-index: 10;
  width: 50%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  height: 100%;
  color: white;
`;

export const BannerTitle = styled.h1`
  font-size: 48px;
`;

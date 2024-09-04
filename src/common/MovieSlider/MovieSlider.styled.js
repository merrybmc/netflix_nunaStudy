import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const CarouselContainer = styled(Carousel)`
  overflow: hidden;
  height: 440px;
`;

export const MovieBoxContainer = styled.div`
  display: flex;
  /* gap: 20px; */
`;

export const Container = styled.div`
  color: white;
`;

export const Title = styled.h3`
  font-size: 36px;
`;

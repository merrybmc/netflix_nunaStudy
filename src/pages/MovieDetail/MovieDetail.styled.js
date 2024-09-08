import styled from 'styled-components';

export const MovieDetailContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const MovieBox = styled.div`
  display: flex;
  width: 70vw;
  gap: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieImage = styled.img`
  max-width: 500px;
  max-height: 400px;
  object-fit: contain;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Adult = styled.div`
  border: 1px solid white;
  padding: 4px;
`;

export const PreviewButton = styled.button`
  color: white;
  border: 1px solid white;
  width: fit-content;
  padding: 8px;

  &:hover {
    color: black;
    background-color: white;
  }
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

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MovieReviewTitle = styled.div`
  font-size: 24px;
  padding: 8px;
`;

export const MovieReviewContainer = styled.div`
  padding: 8px;
  width: 70vw;
`;

export const MovieReviewBox = styled.div`
  border: 1px solid white;
  padding: 8px;
`;

export const MovieReviewAuthor = styled.div`
  font-size: 18px;
`;

export const MovieReviewContent = styled.div`
  font-size: 15px;
  width: 65vw;
  white-space: ${(props) => (props.expanded ? 'normal' : 'nowrap')};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: underline;
`;

export const MovieSliderContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  background-color: transparent;
  height: 440px;
`;

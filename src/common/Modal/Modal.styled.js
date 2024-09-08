import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  width: 60vw;
  height: 40vh;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateX(-50%, -50%);
  z-index: 20;
`;

export const MovieIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

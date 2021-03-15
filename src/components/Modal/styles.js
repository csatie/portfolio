import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow-y: scroll;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;

  ${({ isOpen }) => {
    if (isOpen) {
      return `
      opacity:1;
      pointer-events: all
      `;
    }

    return `
    opacity:0;
    pointer-events:none
    `;
  }}
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
`;

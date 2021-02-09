import styled from 'styled-components';

export const ContentContainer = styled.div`
  overflow: auto;
  width: 100%;
  height: calc(100vh - 30px);
  position: relative;
  ::-webkit-scrollbar {
    display: none;
  }
  z-index: 9999;
`;

export const ContentChildren = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;

  h2 {
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
  }
`;

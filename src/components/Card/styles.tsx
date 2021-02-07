import styled from 'styled-components';

export const CardContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  padding: 30px;
  height: 235px;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  text-align: center;
  -webkit-box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
`;

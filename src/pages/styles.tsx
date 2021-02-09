import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 15px;
  background: #191923;
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  background: #1e1e28;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  -webkit-box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
`;

export const Modal = styled.div`
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;

  .modalHeader {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 100%);
    opacity: 1;
    background: linear-gradient(
      159deg rgba(45, 45, 58, 0.88) 0%,
      rgba(43, 43, 53, 0.88) 100%
    );
    height: 70px;

    .closeIcon {
      color: #8c8c8e;
      margin-right: 20px;
      font-size: 18px;
      transition: color 0.6s ease-in-out;
    }

    .closeIcon:hover {
      color: #fff;
      cursor: pointer;
      transition: color 0.3s ease-in-out;
    }
  }

  .alice-carousel__stage {
    margin-top: 40px;
  }

  .alice-carousel__next-btn-item,
  .alice-carousel__prev-btn-item {
    font-size: 14px;
    color: #4caf50;
  }
`;

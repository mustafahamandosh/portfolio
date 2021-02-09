import styled from 'styled-components';

export const InfoBarContainer = styled.div`
  background: #20202a;
  width: 290px;
  min-width: 290px;
  height: calc(100vh - 30px);
  position: relative;
  z-index: 999;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  transition: 0.55s ease-in-out;
`;

export const CardHeader = styled.div`
  .infoHeader {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    h5 {
      margin-bottom: 10px;
    }

    p {
      align-self: center;
    }
  }
`;

export const CardBody = styled.div`
  height: 100%;
  overflow: hidden;
  outline: none;

  .cardContent {
    padding: 240px 30px 80px 30px;

    ::-webkit-scrollbar {
      display: none;
    }

    height: 100%;
    overflow: auto;

    ul {
      padding-top: 15px;
      padding-bottom: 15px;
    }

    ul li {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      line-height: 2;
    }

    .knowledgeList li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 5px;

      > span {
        margin-left: 12px;
      }
    }
  }
`;

export const Divider = styled.div`
  background: #646466;
  width: 100%;
  height: 1px;
  opacity: 0.3;
`;

export const CircleProgressContainer = styled.div`
  width: 50px;

  h6 {
    padding-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Languages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px;
`;

export const TechnicalSkills = styled.div`
  padding-top: 15px;
  padding-bottom: 30px;

  div {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  padding: 5px;
  width: 100%;
  background: linear-gradient(
    159deg,
    rgba(37, 37, 50, 0.98) 0%,
    rgba(35, 35, 45, 0.98) 100%
  );
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  ul li {
    font-size: 16px;
    list-style-type: none;

    a {
      text-decoration: none;
      color: inherit;
    }

    a:hover {
      text-shadow: 0 0 3px rgb(250 250 252 / 40%);
      color: #fafafc;
      transition: 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

import styled from 'styled-components';
import Card from '../../components/Card';

export const CardHeader = styled.div`
  .infoHeader {
    transition: 0.2s ease-in-out;
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

export const CardBody = styled(Card)`
  background: #20202a;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

  ul li h6 {
    font-weight: 600;
  }

  ul li {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
  }

  //height: 100vh;
  //overflow-y: scroll;
  //overflow-x: hidden;
  //scrollbar-width: none; /* Firefox */
  //-ms-overflow-style: none; /* IE 10+ */
  //::-webkit-scrollbar {
  //  display: none;
  //}
  //.infoBody {
  //  height: 100vh;
  //  div {
  //    height: 100vh;
  //    position: relative;
  //  }
  //
  //  ::-webkit-scrollbar {
  //    display: none;
  //  }
  //
  //  background: #20202a;
  //  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  //  transition: 0.55s ease-in-out;
  //}
`;

export const Divider = styled.div`
  background: #646466;
  width: 100%;
  height: 1px;
  opacity: 0.3;
`;

export const Languages = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

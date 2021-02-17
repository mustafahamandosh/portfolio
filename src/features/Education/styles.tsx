import styled from 'styled-components';

export const TimeLineContainer = styled.div`
  .css-1qhb1kr-TimelineContentDetailsWrapper,
  .css-atdyga-TimelineContentDetailsWrapper,
  .css-1iv48dl-TimelineVerticalWrapper,
  .css-1dujl4k-TimelineMainWrapper,
  .css-i0myh0-TimelineMainWrapper {
    margin: 0;
    padding: 0;
  }

  .card {
    width: 100%;
    height: auto;

    .cardHeader {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      span {
        color: #646466;
        background: #20202a;
        padding: 5px 15px;
        border-radius: 15px;
        box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
        font-size: 10px;
      }
    }

    .cardBody {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      span {
        color: #646466;
        font-style: italic;
        font-size: 11px;
        text-align: left;
        margin-bottom: 15px;
      }

      ol {
        text-align: left;
      }

      ol li {
        ::marker {
          color: #646466;
        }
        padding-bottom: 10px;
        text-align: left;
        font-size: 12px;
      }
    }
  }
`;

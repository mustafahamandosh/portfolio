import React, { ReactNode } from 'react';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';
import { TimeLineContainer } from './styles';
import Card from '../../components/Card';
import { types } from 'util';

interface TimeLineProps {
  timeLineTitle: string;
  timeLineDate: string;
  timeLineLocationName: string;
  children?: ReactNode;
}

const TimeLine: React.FC<TimeLineProps> = ({
  timeLineTitle,
  timeLineDate,
  timeLineLocationName,
  children,
}) => {
  return (
    <TimeLineContainer>
      <Chrono
        mode="VERTICAL"
        slideShow
        hideControls
        theme={{
          cardBgColor: 'transparent',
          secondary: '#4CAF50',
          primary: '#191923',
        }}
      >
        <Card className="card">
          <div className="cardHeader">
            <h5>{timeLineTitle}</h5>
            <span>{timeLineDate}</span>
          </div>
          <div className="cardBody">
            <span>{timeLineLocationName}</span>
            {children}
          </div>
        </Card>
      </Chrono>
    </TimeLineContainer>
  );
};
export default TimeLine;

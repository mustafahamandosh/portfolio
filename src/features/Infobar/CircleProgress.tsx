import React from 'react';
import { CircleProgressContainer } from './styles';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

interface CircleProgressProps {
  value: number;
  textValue: string;
  description: string;
}

const CircleProgress: React.FC<CircleProgressProps> = ({
  value,
  textValue,
  description,
}) => (
  <CircleProgressContainer>
    <CircularProgressbarWithChildren
      value={value}
      styles={buildStyles({
        strokeLinecap: 'round',
        pathColor: `#4CAF50`,
        textColor: '#8c8c8e !important',
        trailColor: '#191923',
        backgroundColor: 'transparent',
      })}
    >
      <div style={{ fontSize: 11, marginTop: -15, marginLeft: 2 }}>
        <span>{textValue}%</span>
      </div>
    </CircularProgressbarWithChildren>
    <h6>{description}</h6>
  </CircleProgressContainer>
);

export default CircleProgress;

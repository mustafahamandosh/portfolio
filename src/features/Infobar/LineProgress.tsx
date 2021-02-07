import React from 'react';
import { Line } from 'rc-progress';

interface LineProgressProps {
  skillName: string;
  percentText: string;
  percent: number;
}

const LineProgress: React.FC<LineProgressProps> = ({
  skillName,
  percent,
  percentText,
}) => (
  <>
    <div>
      <h6>{skillName}</h6>
      <span>{percentText}%</span>
    </div>
    <Line
      percent={percent}
      trailWidth={2}
      trailColor="#191923"
      strokeWidth={2}
      strokeColor="#4CAF50"
    />
  </>
);

export default LineProgress;

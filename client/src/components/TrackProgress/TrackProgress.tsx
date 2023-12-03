// TrackProgress.tsx

import React from 'react';
import { Progress } from 'antd';

interface TrackProgressProps {
  completedTasks: number;
  totalTasks: number;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ completedTasks, totalTasks }) => (
  <div>
    <h3>Task Progress</h3>
    <Progress percent={(completedTasks / totalTasks) * 100} status="active" />
  </div>
);

export default TrackProgress;

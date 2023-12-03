// AssignTask.tsx

import React from 'react';
import { Card } from 'antd';
import AssignTaskForm from './AssignTaskForm';

const AssignTask: React.FC = () => {
  const teamMembers = ['John Doe', 'Jane Smith', 'Bob Johnson']; // Example team members

  const handleTaskAssignment = (values: any) => {
    // Handle task assignment, e.g., send data to the backend
    console.log('Assigned task to:', values.assignee);
  };

  return (
    <Card title="Assign Task" style={{ width: 400 }}>
      <AssignTaskForm teamMembers={teamMembers} onFinish={handleTaskAssignment} />
    </Card>
  );
};

export default AssignTask;

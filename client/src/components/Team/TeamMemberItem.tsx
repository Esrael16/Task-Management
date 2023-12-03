// TeamView.tsx

import React from 'react';
import { List, Avatar } from 'antd';

interface TeamViewProps {
  // Define Task and TeamMember types
  tasks: Task[];
  teamMembers: TeamMember[];
}

interface Task {
  id: number;
  name: string;
  assignedTo: number | null;
}

interface TeamMember {
  id: number;
  name: string;
}

const TeamMember: React.FC<TeamViewProps> = ({ teamMembers, tasks }) => {
  // Mock data for demonstration
  const mockTasks: Task[] = [
    { id: 1, name: 'Task 1', assignedTo: 1 },
    { id: 2, name: 'Task 2', assignedTo: 2 },
    { id: 3, name: 'Task 3', assignedTo: 1 },
    { id: 4, name: 'Task 4', assignedTo: 2 },
  ];

  const mockTeamMembers: TeamMember[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  // Render the list using mock data
  return (
    <div>
      <h3>Team View</h3>
      <List
        dataSource={mockTeamMembers}
        renderItem={(member) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{member.name[0]}</Avatar>}
              title={member.name}
              description={
                <ul>
                  {mockTasks
                    .filter((task) => task.assignedTo === member.id)
                    .map((task) => (
                      <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TeamMember;

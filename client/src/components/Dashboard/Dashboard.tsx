// Dashboard.tsx

import React from 'react';
import { Card, Progress, Row, Col } from 'antd';

interface Task {
  name: string;
  progress: number;
}

interface Project {
  name: string;
  tasks: Task[];
}

interface DashboardProps {
  projects: Project[];
}

const Dashboard: React.FC<DashboardProps> = ({ projects }) => {
  return (
    <div>
      <Card title="Project Progress" style={{ marginBottom: 16 }}>
        <Row gutter={16}>
          {projects.map((project, index) => (
            <Col key={index} span={12}>
              <Card title={project.name} style={{ marginBottom: 16 }}>
                {project.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} style={{ marginBottom: 16 }}>
                    <h4>{task.name}</h4>
                    <Progress percent={task.progress} />
                  </div>
                ))}
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;

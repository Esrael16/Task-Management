// AddProject.tsx

import React from 'react';
import { Card } from 'antd';
import ProjectForm from './ProjectForm';
import { Store } from 'antd/lib/form/interface';

const AddProject: React.FC = () => {
  const handleFormSubmit = (values: Store) => {
    // Handle form submission, e.g., send data to the backend
    console.log('Form values:', values);
  };

  return (
    <Card title="Add New Project" style={{ width: 400 }}>
      <ProjectForm onFinish={handleFormSubmit} />
    </Card>
  );
};

export default AddProject;

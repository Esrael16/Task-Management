// ProjectForm.tsx

import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import { Store } from 'antd/lib/form/interface';

interface ProjectFormProps {
  onFinish: (values: Store) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onFinish }) => {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="projectForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Project Name"
        name="projectName"
        rules={[{ required: true, message: 'Please enter the project name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Project Description"
        name="projectDescription"
        rules={[{ required: true, message: 'Please enter the project description!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Start Date"
        name="startDate"
        rules={[{ required: true, message: 'Please select the start date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="End Date"
        name="endDate"
        rules={[{ required: true, message: 'Please select the end date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Project
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProjectForm;

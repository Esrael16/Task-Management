import React from 'react';
import { Table, Tag, Space } from 'antd';

interface Task {
  key: string;
  task: string;
  deadline: string;
  status: string;
}

const columns = [
  {
    title: 'Task',
    dataIndex: 'task',
    key: 'task',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status: string) => (
      <Tag color={status === 'completed' ? 'green' : 'volcano'}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: string, record: Task) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: Task[] = [
  {
    key: '1',
    task: 'Design UI for Task Management',
    deadline: '2023-12-31',
    status: 'in-progress',
  },
  {
    key: '2',
    task: 'Implement Backend Logic',
    deadline: '2023-12-15',
    status: 'completed',
  },
  {
    key: '3',
    task: 'Add User Authentication',
    deadline: '2023-12-20',
    status: 'in-progress',
  },
  // Add more mock tasks as needed
];

const TaskList: React.FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default TaskList;

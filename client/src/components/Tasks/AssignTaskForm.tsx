// TaskAssignmentForm.tsx

import React from 'react';
import { Form,  Button, } from 'antd';

import { Store } from 'antd/lib/form/interface';
import { openNotification } from './notificationUtils'; // Import the notification utility

interface TaskAssignmentFormProps {
    teamMembers: string[];
    taskDetails?: { assignee: string; deadline: string; start: string; end: string };
    onFinish: (values: Store) => void;
  }
const TaskAssignmentForm: React.FC<TaskAssignmentFormProps> = ({ teamMembers, taskDetails, onFinish }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (taskDetails) {
      form.setFieldsValue({
        assignee: taskDetails.assignee,
        deadline: moment(taskDetails.deadline),
        workSchedule: [
          moment(taskDetails.start, 'YYYY-MM-DD HH:mm'),
          moment(taskDetails.end, 'YYYY-MM-DD HH:mm'),
        ],
      });
    }
  }, [form, taskDetails]);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const showNotification = (assignee: string) => {
    openNotification('success', 'Task Assigned', `You have been assigned a task by ${assignee}.`);
  };

  const onFinish = (values: Store) => {
    const { assignee } = values;
    onFinish(values);
    showNotification(assignee);
  };

  return (
    <Form
      form={form}
      name="taskAssignmentForm"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      {/* ... existing form fields ... */}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {taskDetails ? 'Update Task' : 'Assign Task'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskAssignmentForm;

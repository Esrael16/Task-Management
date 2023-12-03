// Import necessary modules from React and Ant Design

import { Button, notification } from 'antd';

// Component to simulate task assignment
const TaskAssignmentButton = () => {
  // Function to handle task assignment
  const handleTaskAssignment = () => {
    // Simulate task assignment logic
    const assignedTask = {
      id: 1,
      title: 'New Task',
      assignedTo: 'John Doe',
    };

    // Display a notification when a task is assigned
    notification.success({
      message: 'Task Assigned',
      description: (
        <div>
          <p>{`You have been assigned a new task: ${assignedTask.title}`}</p>
          <p>{`Assigned to: ${assignedTask.assignedTo}`}</p>
        </div>
      ),
    });
  };

  return (
    <Button type="primary" onClick={handleTaskAssignment}>
      Assign Task
    </Button>
  );
};

// Main App component
const Notification= () => {
  return (
    <div>
      <h1>Task Management System</h1>
      {/* Your other components and features */}
      <TaskAssignmentButton />
    </div>
  );
};

export default Notification;

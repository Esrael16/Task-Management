
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ISSUE, DELETE_ISSUE} from '../../redux/constants/actionTypes';
import { RootState } from '../../redux/reducer/root.reducer';
import { Card, Form, Button, List, Tag } from 'antd';
import { Store } from 'antd/lib/form/interface';

// Issue and IssueTrackerProps interfaces

const IssueTracker: React.FC<IssueTrackerProps> = ({ projectId }) => {
  const dispatch = useDispatch();
  const issues = useSelector((state: RootState) => state.issues.issues);
  const [form] = Form.useForm();

  const onFinish = (values: Store) => {
    const newIssue: Issue = {
      id: `${Date.now()}`,
      title: values.title,
      description: values.description,
      category: values.category,
      priority: values.priority,
    };

    // Dispatch the addIssue action
    dispatch(ADD_ISSUE(newIssue));
    form.resetFields();
  };

  const handleDeleteIssue = (issueId: string) => {
    // Dispatch the deleteIssue action
    dispatch(deleteIssue(issueId));
  };

  return (
    <div>
      <Card title="Issue Tracker" style={{ marginBottom: 16 }}>
        <Form
          form={form}
          name="issueForm"
          onFinish={onFinish}
          layout="vertical"
        >
          {/* ... (your existing form items) */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log Issue
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="Issues" style={{ marginBottom: 16 }}>
        <List
          itemLayout="horizontal"
          dataSource={issues}
          renderItem={(issue) => (
            <List.Item
              actions={[
                <Button type="link" onClick={() => handleDeleteIssue(issue.id)}>
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={issue.title}
                description={issue.description}
              />
              <div>
                <Tag color="blue">{issue.category}</Tag>
                <Tag color={issue.priority === 'high' ? 'red' : issue.priority === 'medium' ? 'orange' : 'green'}>
                  {issue.priority}
                </Tag>
              </div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default IssueTracker;

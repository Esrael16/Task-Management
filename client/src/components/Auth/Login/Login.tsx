// LoginForm.tsx
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './Login.css'; // Import the CSS file

const LoginForm: React.FC = () => {
 

 

  return (
    <Form
      name="login-form"
      initialValues={{ remember: true }}
      className="login-form"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Username"
          className="login-input"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Password"
          className="login-input"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

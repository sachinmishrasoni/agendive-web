"use client";
import { Form, Input, Button, Checkbox, Typography, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FaVaadin } from 'react-icons/fa6';

const { Title } = Typography;

const LoginPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-50 via-gray-50 to-violet-200">
      <div className="bg-white p-5 shadow-lg rounded-lg max-w-sm md:max-w-md w-full relative">
        <div className='flex items-center justify-center p-4 rounded-full bg-gray-100 border-4 border-white absolute top-[-40px] left-[50%] translate-x-[-50%]'>
          <FaVaadin size={35} />
        </div>
        {/* <Title level={2} className="text-center text-blue-500">
           <span className='font-bold font-righteous text-violet-400'>Agendive</span>
        </Title> */}
        <p className="text-center text-3xl font-bold font-righteous text-violet-400 mt-2">Agendive</p>
        <p className="text-center text-lg text-gray-600">Welcome back!</p>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className='!mt-3 !space-y-3'
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter your username!' }]}
            className='!mb-0'
          >
            <Input prefix={<UserOutlined />} placeholder="Username" size='large' className='!rounded-full' />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
            className='!mb-0'
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" size='large' className='!rounded-full' />
          </Form.Item>

          <Form.Item className='!mb-0'>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="#" className="float-right text-blue-500">
              Forgot password?
            </a>
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full !rounded-full"
            size='large'
          >
            Login
          </Button>
        </Form>

        <Divider className='!my-2'>or</Divider>

        <div className='flex items-center gap-2'>
          <Button shape='round' className='w-full !rounded-full' size='large' icon={<UserOutlined />} >Google</Button>
          <Button shape='round' className='w-full !rounded-full' size='large' icon={<UserOutlined />} >Facebook</Button>
        </div>

        <div className="text-center mt-4">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500">
            Register now!
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

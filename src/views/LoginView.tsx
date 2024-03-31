/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Flex } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import type { Dispatch } from 'redux';
import { Login } from '../store/auth/action';
import { useNavigate, useSearchParams } from 'react-router-dom';


const onFinishFailed = (errorInfo: unknown) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function LoginView() {
  const dispatch: Dispatch<any> = useDispatch();
  const [account, setAccount] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const redirect = search.getAll("redirect")[0] || "/admin";
  const callback = () => {
    navigate(redirect);
  }

  const onFinish = () => {
    dispatch(Login({ account, passWord }, callback))
  };

  const onBack = () => {
    navigate('/')
  }

  const onRegister = () => {
    navigate('/register')
  }

  return (
    <div className="bg">
      <div className="loginBox">
        <h2><span className='primary'>cb交易</span>登录</h2>
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder='用户名：' value={account} onChange={(e: any) => setAccount(e.target.value)} />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='密码：' value={passWord} onChange={(e: any) => setPassWord(e.target.value)} />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-around">
              <Button type="primary" block htmlType="submit" style={{ width: 100 }}>
                登录
              </Button>
              <Button type="primary" block htmlType="submit" style={{ width: 100 }} onClick={onRegister}>
                注册
              </Button>
              <Button type="primary" block htmlType="submit" style={{ width: 100 }} onClick={onBack}>
                选择身份
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginView
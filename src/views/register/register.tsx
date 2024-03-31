/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Flex, message } from 'antd';
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import { Register, SendCode } from '../../store/auth/action';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const onFinishFailed = (errorInfo: unknown) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  companyName?: string,
  name: string,
  account: string,
  passWord: string,
  email: string,
  phoneNumber?: string,
  electrical?: string,
  code: number
};

function RegisterView() {
  const dispatch: Dispatch<any> = useDispatch();
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [electrical, setElectrical] = useState('');
  const [code, setCode] = useState(0);
  const navigate = useNavigate();
  const loginCode = sessionStorage.getItem('loginCode');

  const callback = () => {

    message.success("注册成功")
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }

  const onSendCode = () => {
    message.success("发送验证码成功")
  }

  const onFinish = () => {
    dispatch(Register({
      companyName,
      name,
      account,
      password,
      email,
      phoneNumber,
      electrical,
      code,
    }, callback))
  };

  const onBack = () => {
    navigate('/login')
  }

  const sendCode = () => {
    dispatch(SendCode(email, onSendCode))
  }

  return (
    <div className="bg">
      <div className="registerBox">
        <h2><span className='primary'>cb交易</span>注册</h2>
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {loginCode === '1' ?
            <Form.Item<FieldType>
              name="companyName"
              rules={[{ required: true, message: 'Please input your companyName!' }]}
            >
              <Input placeholder='公司名：' value={companyName} onChange={(e: any) => setCompanyName(e.target.value)} />
            </Form.Item>
            : null}
          <Form.Item<FieldType>
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder='用户名：' value={name} onChange={(e: any) => setName(e.target.value)} />
          </Form.Item>

          <Form.Item<FieldType>
            name="account"
            rules={[{ required: true, message: 'Please input your adminAccount!' }]}
          >
            <Input placeholder='账号：' value={account} onChange={(e: any) => setAccount(e.target.value)} />
          </Form.Item>

          <Form.Item<FieldType>
            name="passWord"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='密码：' value={password} onChange={(e: any) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='邮箱：' value={email} onChange={(e: any) => setEmail(e.target.value)} />
          </Form.Item>

          {loginCode === '2' ?
            <Form.Item<FieldType>
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phoneNumber!' }]}
            >
              <Input placeholder='电话号码：' value={phoneNumber} onChange={(e: any) => setPhoneNumber(e.target.value)} />
            </Form.Item>
            : null
          }

          {loginCode === '1' ?
            <Form.Item<FieldType>
              name="electrical"
              rules={[{ required: true, message: 'Please input your electrical!' }]}
            >
              <Input placeholder='电：' value={electrical} onChange={(e: any) => setElectrical(e.target.value)} />
            </Form.Item>
            : null
          }

          <Flex justify="space-between">
            <Form.Item<FieldType>
              name="code"
              rules={[{ required: true, message: 'Please input your code!' }]}
            >
              <Input placeholder='验证码：' value={code} onChange={(e: any) => setCode(e.target.value)} />
            </Form.Item>
            <Button type="primary" block htmlType="submit" style={{ width: 100 }} onClick={sendCode}>
              发送验证码
            </Button>
          </Flex>

          <Form.Item>
            <Flex justify="space-around">
              <Button type="primary" block htmlType="submit" style={{ width: 100 }}>
                注册
              </Button>
              <Button type="primary" block htmlType="submit" style={{ width: 100 }} onClick={onBack}>
                返回
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default RegisterView
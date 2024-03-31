import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import './LoginSelect.css'

function LoginSelectView() {
  const [code, setCode] = useState('1');
  const navigate = useNavigate();
  const handleChange = (value: string) => {
    setCode(value);
  };

  const onclick = () => {
    sessionStorage.setItem('loginCode', code);
    navigate('/login');
  }
  return (
    <div className="bg">
      <h1 className='title'>请选择登录方式</h1>
      <div className='box'>
        <Select
          defaultValue="1"
          style={{ width: 200 }}
          onChange={handleChange}
          options={[
            { value: '1', label: '企业登录' },
            { value: '2', label: '管理员登录' },
            { value: '3', label: '数据审核员登录' },
          ]}
        />
      </div>
      <div className='button'>
        <Button type="primary" block htmlType="submit" style={{ width: 200 }} onClick={onclick}>
          确定
        </Button>
      </div>
    </div>
  )
}

export default LoginSelectView
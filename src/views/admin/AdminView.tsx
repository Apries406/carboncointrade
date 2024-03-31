/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown, Flex } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import type { Dispatch } from 'redux'
import { getMenus } from '../../store/auth/action'
import { useEffect } from "react";

const { Header, Sider, Content } = Layout;

function Admin() {
  const menu = useSelector((state: RootState) => state.auth.menu)
  const dispath: Dispatch<any> = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()

  const onClick: MenuProps['onClick'] = (e: any) => {
    // console.log('click ', e);
    navigate(e.key);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={() => { navigate('/') }}>退出</div>
      ),
    }
  ];

  useEffect(() => {
    if (menu.length < 2) {
      dispath(getMenus())
      if (location.pathname === "/admin") {
        navigate('/admin')
      } else {
        navigate(location.pathname)
      }
    }
  }, [])

  return (
    <Layout style={{ width: '100vw', height: '100vh' }}>
      <Header>
        <Flex justify="space-between">
          <h2 style={{
            color: 'white',
            fontSize: '2em'
          }}
            onClick={() => { navigate('/admin') }}
          >CB交易</h2>
          <Dropdown menu={{ items }} placement="bottom" arrow trigger={['click']}>
            <Avatar size={56} icon={<UserOutlined />} />
          </Dropdown>
        </Flex>
      </Header>
      <Layout>
        <Sider>
          <Menu
            onClick={onClick}
            mode="inline"
            items={menu}
            theme={'dark'}
          />
        </Sider>
        <Content> <Outlet></Outlet> </Content>
      </Layout>
    </Layout >
  )
}

export default Admin
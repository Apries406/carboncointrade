import { Table, TableProps } from 'antd';
import type { UserListType } from '../../../../types';
import { UserListGet } from '../../../../api/auth';

let data: UserListType[];

UserListGet().then((res) => {
  data = res.data;
  console.log('res', res)
})

const columns: TableProps<UserListType>['columns'] = [
  {
    title: 'Uid',
    dataIndex: 'uid',
    key: 'uid',
  },
  {
    title: '公司名称',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  {
    title: '用户名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '用户账号',
    dataIndex: 'userAccount',
    key: 'userAccount',
  },
  {
    title: '用户密码',
    dataIndex: 'passWord',
    key: 'passWord',
  },
  {
    title: '用户邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '企业类型',
    dataIndex: 'enterpriseType',
    key: 'enterpriseType',
  },
  {
    title: '碳币',
    dataIndex: 'carbonCoin',
    key: 'carbonCoin',
  },
  {
    title: '碳币信用',
    dataIndex: 'carbonCredits',
    key: 'carbonCredits',
  },
  {
    title: '碳币计算',
    dataIndex: 'carbonCalculate',
    key: 'carbonCalculate',
  },
  {
    title: '创建账号时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '交易状态',
    dataIndex: 'tradingStatus',
    key: 'tradingStatus',
  },
  {
    title: '证明',
    dataIndex: 'certificate',
    key: 'certificate',
  },
]

function queryUserView() {
  return <div>
    <Table columns={columns} dataSource={data} />
  </div>
}

export default queryUserView
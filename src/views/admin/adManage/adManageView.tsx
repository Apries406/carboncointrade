import { Table } from 'antd';
import type { TableProps } from 'antd';
import { GetAllAdv } from '../../../api/auth';

interface DataType {
  aid: string;
  url: string;
  createTime: string;
}

let data: DataType[];

GetAllAdv().then((res) => {
  data = res.data;
  console.log('res', res)
})

const columns: TableProps<DataType>['columns'] = [
  {
    title: '广告ID',
    dataIndex: 'aid',
    key: 'aid',
  },
  {
    title: '广告图片',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  }
];

function adManageView() {
  return (<div>
    <Table columns={columns} dataSource={data} />
  </div>)
}

export default adManageView;
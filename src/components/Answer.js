import Link from "next/link"
import useRouter from 'next/router'
import { Card, Button, Skeleton } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export default function Answer ({ data }) {
  const { Meta } = Card;

  const getlength = (data, target) => {
    if (data.answer) {
      return data[target].length
    } else {
      return 0
    }
  }
  return (
      <Card key={data.id}
      style={{ marginTop: 16 }}
      actions={[
        <div style={{ float: "left", paddingLeft: '15px'}}>댓글 {getlength(data, 'replies')}개</div>,
        <div style={{ float: "left", paddingLeft: '15px'}}>{data.hashtags}</div>
      ]}
    >
      <Skeleton loading={false} avatar active>
        <Meta
          avatar={
            <span style={{ fontWeight: 'bold', fontSize: '20px'}}>Q</span>
          }
          title={data['user']}
          description={data['created time']}
        />
        <div style={{ paddingTop: '10px'}}>{data.body}</div>
      </Skeleton>
    </Card>
  )
}
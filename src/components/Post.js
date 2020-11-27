import Link from "next/link"
import useRouter from 'next/router'
import { Card, Button, Skeleton } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

export default function Post ({ data}) {
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
      extra = { 
        <div>
          <Button shape="circle" icon={<EditOutlined />} />
          <Button shape="circle" icon={<DeleteOutlined />}  /> 
        </div>}
      style={{ marginTop: 16 }}
      actions={[
        <div style={{ float: "left", paddingLeft: '15px'}}>답변 {getlength(data, 'answer')}개, 댓글 {getlength(data, 'replies')}개</div>,
        <div style={{ float: "left", paddingLeft: '15px'}}>{data.hashtags}</div>
      ]}
      title={[
      <Link href={{
        pathname: "/qa/[id]", 
        query: {data: JSON.stringify(data)}}} as={`/qa/${data.id}`} key={data.id}>
        {data.title}
      </Link>]}
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